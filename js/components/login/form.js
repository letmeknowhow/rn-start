import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';
import styles from './styles';

const validate = (values) => {
  const error = {};
  error.email = '';
  error.password = '';
  let ema = values.email;
  let pw = values.password;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.password === undefined) {
    pw = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (pw.length > 12) {
    error.password = 'max 11 characters';
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = 'Weak';
  }
  return error;
};

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  inputProps
  }) => {
  let hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Icon active name={input.name === 'email' ? 'person' : 'unlock'} />
      <Input
        placeholder={input.name === 'email' ? 'EMAIL' : 'PASSWORD'}
        {...input}
      />
      {hasError ?
        <Item style={{ borderColor: 'transparent' }}>
          <Icon active style={{ color: 'red', marginTop: 5 }} name="bug" />
          <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
        </Item> :
        <Text />}
    </Item>
  );
};

const SimpleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <View style={styles.bg}>
      <Field name="email" component={renderInput} />
      <Field name="password" component={renderInput} />
      <Button
        style={styles.btn}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Login</Text>
      </Button>
    </View>
  );
};

export default reduxForm({
  form: 'simple',
  validate
})(SimpleForm);