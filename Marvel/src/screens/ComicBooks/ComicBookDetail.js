import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  MD3Colors,
} from 'react-native-paper';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const ComicBookDetail = ({route, navigation}) => {
  const [data, setData] = useState(route.params.item);
  return (
    <ScrollView>
      <TouchableOpacity
        style={{
          width: 50,
          height: 40,
          backgroundColor: '#707070',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Card>
        <Card.Cover
          source={{uri: data.thumbnail.path + '.' + data.thumbnail.extension}}
        />
        <Card.Content>
          <Title>{data.title}</Title>
          <Paragraph>{data.description}</Paragraph>
        </Card.Content>
        <List.Section>
          <List.Subheader style={{fontWeight: 'bold', fontSize: 30}}>
            Creatorr
          </List.Subheader>
          {data.creators.items.map(element => (
            <List.Item title={element.name} />
          ))}
        </List.Section>
        <List.Section>
          <List.Subheader style={{fontWeight: 'bold', fontSize: 30}}>
            Characters
          </List.Subheader>
          {data.characters.items.map(element => (
            <List.Item title={element.name} />
          ))}
        </List.Section>
        <List.Section>
          <List.Subheader style={{fontWeight: 'bold', fontSize: 30}}>
            Stories
          </List.Subheader>
          {data.stories.items.map(element => (
            <List.Item title={element.name} />
          ))}
        </List.Section>
      </Card>
    </ScrollView>
  );
};
export default ComicBookDetail;
