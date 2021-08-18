// @ts-nocheck
 /* eslint-disable */
import { useContext, useEffect, useRef, useState } from "react";
import axios from '../axios';
import { Formik, ErrorMessage, Field} from "formik"
import MediaCard from "./MediaCard";
import { Button, TextField, Input } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Notify from "./Notify";
import ImageContext from "../ContextAPI/ImageContext";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 600,
    },
    image: {
        height: "15em",
        border: "1px solid #ececec",
        width: 600,
        minHeight: 310,
    },
    file: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "15em",
        border: "1px solid #ececec",
        width: 600,
        minHeight: 300,
    },
    inputs: {
        display: "flex",
        //justifyContent: "space-evenly",
        //alignItems: "center",
        flexDirection: "column",
        marginTop: "2em",
        //height: "7em",
        width: 600,
        minHeight: 200,
    },
    button: {
        display: "flex",
        justifyContent: "center",
        //alignItems: "center",
    }
})


function FileForm() {

    const classes = useStyles();

    const [success, setSuccess] = useState(false);
    const [msg, setMsg] = useState('');

    const { preview, setPreview, file, setFile, description, setDescription, errInput, setErrInput, formImage, setFormImage, initialDesc, initialErrInput, setItemData, } = useContext(ImageContext)

    const cancelButton = useRef();

    const submit = async event => {
        event.preventDefault();
        const flag = await validate(description)

        if(flag){
            let formData = new FormData();
            formData.append("image", file);
            formData.append("description", JSON.stringify(description));
            setFormImage(formData)
        }
    }

    const resetMedia = resetForm => {
        setPreview(null);
        setFile(null);
        setDescription(initialDesc);
        setErrInput(initialErrInput);
        resetForm();
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
        setPreview(reader.result);
        };
        //console.log(file);
        reader.readAsDataURL(file);
    };

    const validate = async values => {
        if (!values.email) {
            setErrInput(prevState => ({ 
                ...prevState,    
                email: "Required!" 
            }));
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            setErrInput(prevState => ({ 
                ...prevState,    
                email: "Invalid email address!" 
            }));
        } else{
            setErrInput(prevState => ({ 
                ...prevState,    
                email: null
            }));
        }

        if (!values.phone) {
            setErrInput(prevState => ({ 
                ...prevState,    
                phone: "Required!" 
            }));
        } else if (values.phone.length < 6 || values.phone.length > 12 ) {
            setErrInput(prevState => ({ 
                ...prevState,    
                phone: "Valid phone numbers between 6 and 12 digits!" 
            }));
        } else{
            setErrInput(prevState => ({ 
                ...prevState,    
                phone: null
            }));
        }
        
        if(!errInput.email && !errInput.phone) return true;
        return false;
    }

    const postImage = async () => {
        const { data } = await axios.post('/upload', formImage);
        console.log(data);
        setSuccess(data.success)
        setMsg(data.message)

        if(data.success){
            setItemData(prevState => [ data.data, ...prevState ])
        }
    }

    useEffect(() => {
        formImage && postImage()
    }, [formImage])

    return (
        <div>
            <Formik>
              {({ resetForm }) => (
                <form onSubmit={submit} >
                  <div className={classes.root}>
                    { preview ? (
                    <div className={classes.image}>
                        <MediaCard srcMedia={preview} />
                    </div>
                    ) : (
                    <div className={classes.file}>
                        <input
                          accept="image/*"
                          id="file"
                          name="image"
                          type="file"
                          onChange={({currentTarget}) => {
                            const image = currentTarget.files[0];
                            //console.log(image);
                            //setFieldValue("file", currentTarget.files[0]);
                            setFile(image);
                            previewImage(image);
                          }}
                        />
                    </div>
                    )}

                    <div className={classes.inputs}>
                      <TextField
                       name="name"
                       type="text"
                       size="small"
                       variant="outlined"
                       label="Name"
                       required={true}
                       onChange={({currentTarget}) => {                           
                            setDescription( prevState => ({ 
                                ...prevState,    
                                name: currentTarget.value 
                            }
                        ));
                       }}
                      />
                      <TextField
                       name="email"
                       type="text"
                       size="small"
                       variant="outlined"
                       label="Email"
                       required={true}
                       type="email"
                       error={errInput.email ? true : false}
                       helperText={errInput.email}
                       onChange={({currentTarget}) => {
                            setDescription( prevState => ({ 
                                ...prevState,    
                                email: currentTarget.value 
                            }
                       ));
                       }}
                      />
                      <TextField
                       name="phone"
                       type="text"
                       size="small"
                       variant="outlined"
                       label="Phone"
                       required={true}
                       type="number"
                       error={errInput.phone ? true : false}
                       helperText={errInput.phone}
                       onChange={({currentTarget}) => {
                            setDescription( prevState => ({ 
                                ...prevState,    
                                phone: currentTarget.value 
                            }
                       ));
                       }}
                      />
                      <div className={classes.button}>
                        <Button 
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                        Save
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            type="reset"
                            ref={cancelButton}
                            onClick={() => { resetMedia(resetForm) }}
                        >
                        Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <Notify success={success} msg={msg}/>
        </div>
    )
}

export default FileForm
