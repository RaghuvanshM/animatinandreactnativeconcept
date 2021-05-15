import React, { Component } from 'react'
import {
    Button,
    Text,
    View,
} from 'react-native';
class TestDemo extends Component {
    constructor(props){
        super(props)
    }
    
    OnSubmitClicked = async () => {
        alert('hello')
         const url ='https://novice.jingleinfo.com/novicecabnew/mobileapp/Driver/driver_signup_2'
            let data = {
                type_of_vechile :'maniaaf sa ' ,
                sheets: 4,
                vechile_rc:"vechilerc",
                vechile_number: 87878,
                avialabel_vans: 7,
                car_model:5454,
                id_driver: 32,
            }
            console.log(data)
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'prabhat@cab'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(res2 => {
                    console.log(res2)
                    if (res2.response.status==='true') {
                    }
                    else {

                    }
                })
    }
    render() {
        return (
          <View style={{marginTop:20}}>
              <Button 
               title='press on it  and click me'
               onPress={()=>{this.OnSubmitClicked()}}
              />
          </View>
        )
    }
}
export default TestDemo;