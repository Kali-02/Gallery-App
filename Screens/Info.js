import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ThemeConsumer } from 'react-native-elements'

const Info = () => {
    const route = useRoute()
    const { res } = route.params
    return (
        <ThemeConsumer>
        { ({theme})=>
         (<View style={theme.Infostyles.view}>
            <View style={theme.Infostyles.view2} >
                <Text style={theme.Infostyles.text2}> File Name :</Text>
                <Text style={theme.Infostyles.text3}>
                    {res.Info.fileName}
                </Text>
            </View>
            <View style={theme.Infostyles.view3} >
                <Text style={theme.Infostyles.text4}> FileSize     :</Text>
                <Text style={theme.Infostyles.text5}>
                    {res.Info.fileSize}
                </Text>
            </View>
            <View style={theme.Infostyles.view4} >
                <Text style={theme.Infostyles.text6}> Height       :</Text>
                <Text style={theme.Infostyles.text7}>
                    {res.Info.height}
                </Text>
            </View>
            <View style={theme.Infostyles.view5} >
                <Text style={theme.Infostyles.text8}> Type          :</Text>
                <Text style={theme.Infostyles.text9}>
                    {res.Info.type}
                </Text>
            </View>
            <View style={theme.Infostyles.view5} >
                <Text style={theme.Infostyles.text8}> Width        :</Text>
                <Text style={theme.Infostyles.text10}>
                    {res.Info.width}
                </Text>
            </View>

        </View>)}
        </ThemeConsumer>
    )
}

export default Info

