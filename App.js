

import React, { useRef } from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles1,viewsChilds } from './assets/styles/myStyles';


const YourApp = () => {

  const [Identificacion, setIdentificacion] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Asignatura, setAsignatura] = useState('');
  const [NMoment1, setNMoment1] = useState('');
  const [NMoment2, setNMoment2] = useState('');
  const [NMoment3, setNMoment3] = useState('');
  const [Definitiva, setDefinitiva] = useState(0);
  const [Observacion, setObservacion] = useState('');
  const [TextError, setTextError] = useState('');
  const [Datos , setDatos] = useState([]);
  let refIdentificacion = useRef();
 

  function Limpiar() {
    setIdentificacion('');
    setNombre('');
    setAsignatura('');
    setNMoment1('');
    setNMoment2('');
    setNMoment3('');
    setDefinitiva('');
    setObservacion('');
    setTextError('');
  }

  const guardar = () => {
    if (Identificacion == "" || Nombre == "" || Asignatura == "" || NMoment1 == "" || NMoment2== "" || NMoment3== "" ) {
      setTextError('TODOS LOS DATOS SON REQUERIDOS! ');
    }
    else{
      if (parseFloat(NMoment1) >=0 && parseFloat(NMoment1) <= 5 && parseFloat(NMoment2) >=0 && parseFloat(NMoment2) <= 5 && parseFloat(NMoment3) >=0 && parseFloat(NMoment3) <= 5) {
        let sumaNotas = (parseFloat(NMoment1)+parseFloat(NMoment2)+parseFloat(NMoment3))
        let promedioNotas = (sumaNotas/3).toFixed(2);
        let obs="";
        setDefinitiva(promedioNotas);

        if (promedioNotas>3) {
          obs = `Aprueba: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }else if(promedioNotas>=2 && promedioNotas<=2.94){
          obs = `Habilita: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }else if(promedioNotas<2){
          obs = `Reprueba: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }
        //Agregar datos al array a través del método setSalarios para el array salarios
        setDatos(misDatos => [...misDatos,{identificacion:Identificacion ,nombre:Nombre,asignatura:Asignatura ,nota1:NMoment1 ,nota2:NMoment2 ,nota3:NMoment3 ,definitiva:promedioNotas ,observacion:obs}] );
        //console.log(salarios);
      }else{
        setTextError('TODAS LAS NOTAS DEBEN SER ENTRE 0 Y 5! ');
      }
    }

  }

  let buscar = (nombuscar) =>{
    let busca = ""
    for(let dat of Datos){
      console.log(dat)
      if (dat.identificacion == Identificacion) {
        setNombre(dat.nombre);
        setAsignatura(dat.asignatura);
        setNMoment1(dat.nota1);
        setNMoment2(dat.nota2);
        setNMoment3(dat.nota3);
        setDefinitiva(dat.definitiva);
        setObservacion(dat.observacion);
        busca ="aca"
      }
  }
    if(busca == ""){
      alert("Identificacion no hallada");
    }
  }

  
  
  return (
    <View style={[styles1.container,styles1.alignViews,{borderRadius:10,flexDirection: 'column'}]}>
     <View>
          <Text>Identificacion</Text>
          <TextInput
            placeholder='Identificación'
            style={{fontSize:17, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Identificacion => setIdentificacion(Identificacion)}
            value={Identificacion}
            ref={refIdentificacion}
          />
          <Text>{'\n'}</Text>
          <Text>Nombres</Text>
          <TextInput
            placeholder='Estudiante'
            style={{fontSize:17, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nombre => setNombre(Nombre)}
            value={Nombre}
          />
          <Text>{'\n'}</Text>
          <Text>Asignatura</Text>
          <TextInput
            placeholder='Materia'
            style={{fontSize:20, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Asignatura => setAsignatura(Asignatura)}
            value={Asignatura}
          />
          {/* <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        /> */}
          <Text>{'\n'}</Text>
          <Text>Primer Momento 1 (30%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:17, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={NMoment1 => setNMoment1(NMoment1)}
            value={NMoment1}
          />
          <Text>{'\n'}</Text>
          <Text>Segundo Momento 2 (35%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:17, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={NMoment2 => setNMoment2(NMoment2)}
            value={NMoment2}
          />
          <Text>{'\n'}</Text>
          <Text>Tercer Momento 3 (35%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:17, borderWidth:2, borderColor:'blue',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={NMoment3 => setNMoment3(NMoment3)}
            value={NMoment3}
          />
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>Nota Final</Text>
          <Text>{Definitiva}</Text>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>Observaciones</Text>
          <Text>{Observacion}</Text>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>{TextError}</Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>


          <Button
            title='Calcular/Guardar'
            onPress={guardar}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Buscar'
            onPress={buscar}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Limpiar'
            onPress={()=>Limpiar()}
          />
      </View>

      </View>
  );
}



export default YourApp;