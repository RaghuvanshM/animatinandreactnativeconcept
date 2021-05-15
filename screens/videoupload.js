import React from 'react'
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import { Button, Text, View } from 'react-native'
import { Component } from 'react';
const options = {
    title: 'Video Picker',
    mediaType: 'video',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const api = 'https://novice.jingleinfo.com/novicecabnew/mobileapp/Driver'
class VideoUpload extends Component {
    uploaddoc = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {

            } else if (response.error) {

            } else if (response.customButton) {

            } else {
                // https://novice.jingleinfo.com/novicecabnew/mobileapp/Driver/cab_video
                console.log(response)
                let source = { uri: response.uri };
                    RNFetchBlob.fetch(
                        'POST',
                        `${api}/cab_video`,
                        {
                            Authorization: 'Bearer access-token',
                            otherHeader: 'foo',
                            'Content-Type': 'multipart/form-data',
                            'x-api-key': 'prabhat@cab',
                        },
                        [
                            {
                                name: 'cab_video',
                                filename:source,
                                data:response.path,
                            },
                            { name: 'id_driver', data:28 },
                        ],
                    ).then((resp) => {
                        console.log(resp)
                        if (resp.data != '') {
                        }
                        else {
    
                        }

                    });
            }
        })

    }
    render() {
        return (
            <View>
                <Text>this is for help nature</Text>
                <Button
                    title='this is upload image component'
                    onPress={() => { this.uploaddoc() }}
                />
            </View>
        )
    }
}
export default VideoUpload;