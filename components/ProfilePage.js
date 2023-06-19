import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet,Image,Text } from 'react-native'; 
 
const ProfilePage = () => { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [birth, setBirth] = useState(''); 
  const[value, setValue] = useState(''); 
 
  const handleNameChange = (text) => { 
    setName(text); 
  }; 
 
  const handleEmailChange = (text) => { 
    setEmail(text); 
  }; 
 
  const handlePhoneChange = (text) => { 
    setPhone(text); 
  }; 
 
  const handleBirthChange = (text) => { 
    setBirth(text); 
  }; 
  // const handleUpdate = (text) => { 
  //   setValue(text); 
  // }; 
 
  const user = { 
    name: 'Chetan Surendra Sarode', 
    address: 'Nagpur Maharashtra', 
    // profilePicture: require('./assets/profile_picture.jpg'), // Replace with your own image path 
  }; 
 
  const handleUpdate = (text) => { 
    // Handle form submission here 
 
    setValue(text); 
     
    // console.log('Name:', name); 
    // console.log('Email:', email); 
    // console.log('Phone:', phone); 
    // console.log('Birth :', birth); 
  }; 
 
  return ( 
    <View style={styles.container}> 
       <View style={{ flexDirection: 'row', 
             alignContent: 'space-between',margin:5}}> 
               <Image 
        style={styles.profileImage} 
         source={require('../assets/profile-user.png')} // Replace with your own profile picture 
       /></View> 
        <Text style={styles.name}>{user.name}</Text> 
        <Text style={styles.address}>{user.address}</Text> 
         
      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name} 
        onChangeText={handleNameChange} 
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={handleEmailChange} 
        keyboardType="email-address" 
      /> 
       <TextInput 
        style={styles.input} 
        placeholder="Phone" 
        value={phone} 
        onChangeText={handlePhoneChange} 
      /> 
       <TextInput 
        style={styles.input} 
        placeholder="Birthday" 
        value={birth} 
        onChangeText={handleBirthChange} 
        
      /> 
      <TextInput 
        style={styles.input} 
        placeholder="Date of Bike Purchase" 
         
        
      /> 
 
 
      {/* <Button title="Submit" onPress={handleSubmit} /> */} 
 
      <Image source={require('../assets/Gallery.png')} style={{ height:200, width:300}} /> 
 
        <Button value={value} title="Update Profile" onPress={handleUpdate}   style={{backgroundColor:'#fec324'}} />  
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
  }, 
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10, 
    paddingHorizontal: 10, 
     backgroundColor:'#fec324', 
      borderRadius:5, 
       width:250, 
        height:40,  
        margin:10 
  }, 
  profileImage: { 
         width: 75, 
         height: 75, 
         borderRadius: 75, 
         marginBottom: 20, 
       }, 
 
       name: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10, 
      }, 
      address: { 
        fontSize: 16, 
      }, 
}); 
 
export default ProfilePage;