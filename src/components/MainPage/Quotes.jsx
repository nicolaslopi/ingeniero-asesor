import {
    Card,
    Container,
    Grid,
    Typography,
    Divider,
    Button,
    Box,
    Dialog,
    DialogTitle,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField
  } from "@mui/material";
import {motion} from 'framer-motion';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
  
const Quotes = () => {
    
    // const [open, setOpen] = useState(false)

    // const [isSuccess, setIsSuccess] = useState(false);
    // const [isError, setIsError] = useState(false);

    // const [formData, setFormData] = useState({
    //     service: 0,
    //         empresa: '',
    //         nombreCompleto: '',
    //         correo: '',
    //         nivelRiesgo: 1,
    //         actividad: 1,
    //         numeroTrabajadores: 1,
    //         tamanoFlotaConductores: 1,
    //         tipoServicio: 1,
    //         telefono: '',
    //         precio: 0
    // });

    // const services = [
    //     {value:1, label:'A) Diseño SG-SST (Resolución 0312)', shortLabel: 'SST'},
    //     {value:2, label:'B) Diseño PESV (Plan Estratégico de Seguridad Vial)', shortLabel: 'PESV'},
    //     {value:3, label:'C) Otros Servicios (Implementación, Auditorías, etc.)', shortLabel: 'OTROS'}
    // ]

    // const nivelesDeRiesgo = [
    //     {value:1, label:'I'},
    //     {value:2, label:'II'},
    //     {value:3, label:'III'},
    //     {value:4, label:'IV'},
    //     {value:5, label:'V'},
    // ]
    
    // const actividades = [
    //     {value:1, label:'Empresa de Transporte'},
    //     {value:2, label:'Empresa Diferente al Transporte'}
    // ]

    // const tiposServicio = [
    //     {value:1, label:'Implementación SG-SST / PESV'},
    //     {value:2, label:'Auditorías Internas'},
    //     {value:3, label:'Investigación de Accidentes'},
    //     {value:4, label:'Capacitaciones y Formación'},
    //     {value:5, label:'Otro'},
    // ]

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
        
    //     if (name === 'service') {
    //         setFormData({
    //             empresa: '',
    //             nombreCompleto: '',
    //             correo: '',
    //             nivelRiesgo: 1,
    //             actividad: 1,
    //             numeroTrabajadores: 1,
    //             tamanoFlotaConductores: 1,
    //             tipoServicio: 1,
    //             telefono: '',
    //             precio: 0
    //         })
    //     }
    //     // 1. Definimos qué campos queremos tratar como números
    //     const numericFields = [
    //         'numeroTrabajadores', 'tamanoFlotaConductores'
    //     ];
    
    //     let finalValue = value;
    
    //     // 2. Si el campo debe ser numérico, limpiamos lo que no sea número
    //     if (numericFields.includes(name)) {
    //         // .replace(/[^0-9]/g, "") quita cualquier cosa que no sea un dígito
    //         const cleaned = value.replace(/[^0-9]/g, "");
    //         // Convertimos a Number para que coincida con tu estado inicial
    //         finalValue = cleaned === "" ? 0 : Number(cleaned);
    //     }
    
    //     setFormData(prev => ({
    //         ...prev,
    //         [name]: finalValue
    //     }));
    // };

    // const handleChangeNumbers = (value, setValue) => {
    //     const val = value;
    //     // El regex [^0-9] busca todo lo que NO sea un número y lo borra
    //     const onlyNums = val.replace(/[^0-9]/g, "");
    //     setValue(onlyNums);
    // };

    // const calcularPrecio = () => {
    //     return 200000   
    // }
    
    // const enviarDirectoASheets = async () => {
    //     const url = 'https://script.google.com/macros/s/AKfycbwyxTI7xTIz7BvitrgY1pt3mz4jzRCWS14f_HunId51YCzIS9L9jAgFenCX3izD8_z8cg/exec'; // La que copiaste arriba
    //     const datos = {
    //         fecha: new Date().toLocaleDateString(),
    //         empresa:formData.empresa !== ''?formData.empresa:formData.nombreCompleto,
    //         correo:formData.correo,
    //         servicio: services.find(s => s.value === formData.service)?.shortLabel,
    //         telefono: formData.service === 3? formData.telefono:null,
    //         trabajadoresRiesgo: formData.service === 1? `Trabajadores: ${formData.numeroTrabajadores}, Riesgo: ${nivelesDeRiesgo.find(s => s.value === formData.nivelRiesgo)?.label}`
    //             : formData.service === 2? `Actividad: ${actividades.find(s => s.value === formData.actividad)?.label}, Flota: ${formData.tamanoFlotaConductores}`: `Servicio de interés: ${tiposServicio.find(s => s.value === formData.tipoServicio)?.label}`,
    //         precio: calcularPrecio()
    //     };

    //     try {
    //       await fetch(url, {
    //         method: 'POST',
    //         mode: 'no-cors', // Muy importante para Google Scripts
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(datos),
    //       });
    //       alert("¡Cotización guardada exitosamente!");
    //       setIsSuccess(true)
    //     } catch (error) {
    //       console.error("Error:", error);
    //       setIsError(true)
    //     }
    // };

    return (
      <Container sx={{ pt: 8, pb:{xs:2, md:0}, px:{xs:3, md:8} }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "#000032",
            mb: 4,
            fontWeight: "bold",
          }}
          component={motion.div}
          initial={{translateX:-90, opacity:0}}
          whileInView={{translateX:0, opacity:1}}
          transition={{duration:1}}
          exit={{translateX:0}}
        >
            Cotiza Automáticamente
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: 8,
            fontWeight: "bold",
          }}
          component={motion.div}
          initial={{translateX:90, opacity:0}}
          whileInView={{translateX:0, opacity:1}}
          transition={{duration:1}}
          exit={{translateX:0}}
        >
          ¿Necesitas diseñar tu Sistema de Gestión de Seguridad y Salud en el Trabajo o tu Plan Estratégico de Seguridad Vial? Cotiza ahora de forma automática.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }} component={motion.div} initial={{translateX:-90, opacity:0}} whileInView={{translateX:0, opacity:1}} transition={{duration:1}} exit={{translateX:0}}>
            <Button 
                variant="contained" sx={{width:{xs:'100%', md:'330px'}, fontSize: {xs: "18px", md:"20px"}, backgroundColor:"#000032", color:"#fff", borderColor:"#f99f00", borderRadius:50, "&:hover":{backgroundColor:'transparent', color:"#000032",border:"1px solid #000032"}}}
                onClick={()=>{window.location.href = 'https://studio--studio-8353620526-3b381.us-central1.hosted.app/'}}
            >
                Iniciar Cotización Ahora
            </Button>
        </Box>
        {/* <Dialog 
            open={open}
            disableEscapeKeyDown
            onClose={(event, reason)=>{
                if (reason !== 'backdropClick') {
                    setOpen(false);
                  }
            }}
        >
            <Grid container sx={{p:1}}>
                <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                        <CancelIcon fontSize="medium" sx={{color:'#000032'}} onClick={()=>{
                            setFormData({
                                service: 0,
                                empresa: '',
                                nombreCompleto: '',
                                correo: '',
                                nivelRiesgo: 1,
                                actividad: 1,
                                numeroTrabajadores: 1,
                                tamanoFlotaConductores: 1,
                                tipoServicio: 1,
                                telefono: '',
                                precio: 0
                            })
                            setOpen(false)
                        }}
                        />
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <DialogTitle id="alert-dialog-title" textAlign={'center'} sx={{color:'#000032'}}>
                        <Typography variant="h4" sx={{mb:1}}>Cotizador Automático de Diseños SST y PESV</Typography>
                        <Typography variant="body2">Cumple con la Resolución 0312 de 2019 y la Resolución 40595 de 2022</Typography>
                    </DialogTitle>
                    <Divider
                        sx={{
                            backgroundColor: "#000032",
                            mb:3,
                            width: "100%",
                            height: 1.5,
                            mx: "auto",
                        }}
                    />
                    <Grid container gap={2}>
                        <Grid item xs={12}>
                            <Typography variant="body1" textAlign={'center'} sx={{mb:2}}>Selecciona el servicio que necesitas para comenzar</Typography>
                            <InputLabel id="demo-simple-select-label">¿Qué servicio necesitas?</InputLabel>
                            <Select
                                name="service"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{width:'100%'}}
                                value={formData.service}
                                // label="Elige una opción..."
                                onChange={handleChange}
                            >
                                <MenuItem value={0} disabled sx={{color:'CaptionText'}}>Elige una opción...</MenuItem>
                                {services.map((item)=>(
                                    <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        {formData.service !== 0 && <Divider
                            sx={{
                                backgroundColor: "#000032",
                                mb:2,
                                mt:1,
                                width: "100%",
                                height: 1,
                                mx: "auto",
                            }}
                        />}
                        {formData.service === 1 && <>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Nombre de la Empresa</InputLabel>
                                <TextField id="outlined-basic" name="empresa" variant="outlined" fullWidth placeholder="Ej: Mi Empresa S.A.S" value={formData.empresa} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Correo Electrónico</InputLabel>
                                <TextField id="outlined-basic" name="correo" variant="outlined" fullWidth placeholder="Ej: tu@correo.com" type="email" value={formData.correo} onChange={handleChange}/>
                            </Grid>
                            <Grid container justifyContent={'space-between'}>
                                <Grid item xs={5.5}>
                                    <InputLabel id="demo-simple-select-label">Número de Trabajadores</InputLabel>
                                    <TextField 
                                        id="outlined-basic"
                                        name="numeroTrabajadores"
                                        variant="outlined" 
                                        fullWidth 
                                        value={formData.numeroTrabajadores} 
                                        onChange={handleChange}
                                        placeholder="Ej: 15"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                    />
                                </Grid>
                                <Grid item xs={5.5}>
                                    <InputLabel id="demo-simple-select-label">Nivel de Riesgo</InputLabel>
                                    <Select
                                        fullWidth
                                        name="nivelRiesgo"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={formData.nivelRiesgo}
                                        // label="Elige una opción..."
                                        onChange={handleChange}
                                    >
                                        {nivelesDeRiesgo.map((item)=>(
                                            <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid> 
                        </>}
                        {formData.service === 2 && <>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Nombre de la Empresa</InputLabel>
                                <TextField id="outlined-basic" name="empresa" variant="outlined" fullWidth placeholder="Ej: Mi Empresa S.A.S" value={formData.empresa} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Correo Electrónico</InputLabel>
                                <TextField id="outlined-basic" name="correo" variant="outlined" fullWidth placeholder="Ej: tu@correo.com" type="email" value={formData.correo} onChange={handleChange}/>
                            </Grid>
                            <Grid container justifyContent={'space-between'}>
                                <Grid item xs={5.5}>
                                    <InputLabel id="demo-simple-select-label">Actividad de la Empresa</InputLabel>
                                    <Select
                                        fullWidth
                                        name="actividad"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={formData.actividad}
                                        // label="Elige una opción..."
                                        onChange={handleChange}
                                    >
                                        {actividades.map((item)=>(
                                            <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={5.5}>
                                    <InputLabel id="demo-simple-select-label">Tamaño de Flota / # Conductores</InputLabel>
                                    <TextField 
                                        id="outlined-basic"
                                        name="tamanoFlotaConductores"
                                        variant="outlined" 
                                        fullWidth 
                                        value={formData.tamanoFlotaConductores} 
                                        onChange={handleChange}
                                        placeholder="Ej: 15"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                    />
                                </Grid>
                            </Grid>
                        </>}
                        {formData.service === 3 && <>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Nombre Completo</InputLabel>
                                <TextField id="outlined-basic" name="nombreCompleto" variant="outlined" fullWidth placeholder="Ej: Mi Empresa S.A.S" value={formData.nombreCompleto} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Correo Electrónico</InputLabel>
                                <TextField id="outlined-basic" name="correo" variant="outlined" fullWidth placeholder="Ej: tu@correo.com" type="email" value={formData.correo} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Celular/WhatsApp</InputLabel>
                                <TextField 
                                    id="outlined-basic"
                                    name="telefono"
                                    variant="outlined" 
                                    fullWidth 
                                    value={formData.telefono} 
                                    onChange={handleChange}
                                    placeholder="Ej: 15"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Tipo de Servicio</InputLabel>
                                <Select
                                    fullWidth
                                    name="tipoServicio"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.tipoServicio}
                                        // label="Elige una opción..."
                                    onChange={handleChange}
                                >
                                    {tiposServicio.map((item)=>(
                                        <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </>}
                        {formData.service !== 0 && 
                            <Button
                                fullWidth
                                variant="contained" sx={{fontSize: {xs: "18px", md:"20px"}, backgroundColor:"#f99f00", color:"#fff", "&:hover":{backgroundColor:'#000032', color:"#fff"}}}
                                onClick={enviarDirectoASheets}
                            >
                                Cotizar Ahora
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Dialog> */}
      </Container>
    );
  };
  
  export default Quotes;
  