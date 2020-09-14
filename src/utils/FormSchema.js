
import * as yup from 'yup'




 const Registerschema = yup.object().shape({
     name : yup.string().required("Campo Obrigatório"),
     email : yup.string().email("Digite um email válido").required("Campo Obrigatório"),
     password: yup.string().min(8,'A senha deve ter 8 ou mais caracteres').max(12,'A senha deve ter 12 ou menos caracteres').required("Campo Obrigatório"),
     password2:yup.string().required("Campo Obrigatório")
     .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Senhas não coincidem")})
 })

 const Loginschema = yup.object().shape({
     email: yup.string().email("Digite um email válido").required("Campo Obrigatório"),
     password: yup.string().required("Campo Obrigatório").min(8,"Senha está com menos de 8 caracteres").max(12,"Senha está com mais de 12 caracteres")
 })

 const Contextschema = yup.object().shape({
     name: yup.string().matches(/[çÇa-zA-Z.*\s]+$/,"caractere especial proibido").min(2,"no mínimo 2 caracteres").max(30,"no máximo 30 caracteres").required("Campo Obrigatório"),
     imageUrl: yup.string().url("Digite uma URL válida").required("Campo Obrigatório"),
     videoUrl: yup.string().url("Digite uma URL válida"),
     soundUrl: yup.string().url("Digite uma URL válida")
 })

 const Challengeschema = yup.object().shape({
    context: yup.number().required("Campo Obrigatório"),
    word: yup.string().matches(/[çÇa-zA-Z.*\s]+$/,"Caractere especial proibido").min(2,"no mínimo 2 caracteres").max(30,"no máximo 30 caracteres").required("Campo Obrigatório"),
    imageUrl: yup.string().url("Digite uma URL válida").required("Campo Obrigatório"),
    videoUrl: yup.string().url("Digite uma URL válida"),
    soundUrl: yup.string().url("Digite uma URL válida"),
    
})
 


export {Registerschema,Loginschema,Contextschema,Challengeschema}