import React from 'react';
import {Button, Card, Title, Paragraph, Avatar, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Property(props) {
  const handleNavigate = data => {
    console.log(data);
  };
  return (
    <Card style={styles.card} onPress={() => handleNavigate(props)}>
      <View>
        <Card.Cover source={{uri: props.img}} style={styles.productImg} />
      </View>
      <Card.Content>
        <Title style={styles.text}>{props.name}</Title>
        <Paragraph numberOfLines={3} style={styles.descripton}>
          {props.descripton}
        </Paragraph>
        <View style={styles.listRow}>
          <Avatar.Text size={24} label="XD" color="white" />
          <View style={styles.iconText}>
            <MaterialIcons name="location-city" size={24} />
            <Text style={{fontWeight: '700'}}> {props.address.city}</Text>
          </View>
          <View style={styles.iconText}>
            <FontAwesome name="dollar" size={16} />
            <Text style={{fontWeight: '700'}}> {props.price}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: 'white',
  },
  productImg: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  descripton: {
    marginBottom: 16,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});