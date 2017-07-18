import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';
import { setUser } from '../../actions/user';
import styles from './styles';
import SimpleForm from './form';

const background = require('../../../images/shadow.png');

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  // setUser(name) {
  //   this.props.setUser(name);
  // }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <SimpleForm {...this.props} />
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

Login.navigationOptions = {
  header: null
};
export default Login;
