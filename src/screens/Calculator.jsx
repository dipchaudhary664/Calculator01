import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Calculator = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark01: '#292B36',
    dark02: '#272B33',
    light: '#FFF',
    light01: '#F1F1F1',
    light02: '#F7F7F7',
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);

  const getBtnColor = type => {
    if (type == 'top') {
      return '#35fbd6';
    } else if (type == 'right') {
      return '#eb6363';
    } else {
      return getColor(colors.dark, colors.light);
    }
  };

  const calculate = title => {
    if (title == 'C') {
      setResult('');
    } else if (title == 'X') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const answer = Number(eval(result).toFixed(3)).toString();
      setResult(answer);
    } else {
      setResult(result + title);
    }
  };

  const Btn = ({title, type}) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 100,
        elevation: 2,
        backgroundColor: getColor(colors.light01, colors.dark01),
        height: 70,
        width: '18%',
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 40,
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: getColor(colors.light, colors.dark),
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{false: colors.dark01, true: colors.light01}}
      />
      <Text
        style={{
          fontSize: 50,
          width: '100%',
          height: '10%',
          textAlign: 'right',
          paddingRight: 20,
          color: getColor(colors.dark, colors.light),
          marginBottom: 30,
          marginTop: '40%',
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: getColor(colors.light01, colors.dark01),
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <Btn title={'C'} type="top" />
        <Btn title={'X'} type="top" />
        <Btn title={'%'} type="top" />
        <Btn title={'/'} type="top" />

        <Btn title={'9'} type="num" />
        <Btn title={'8'} type="num" />
        <Btn title={'7'} type="num" />
        <Btn title={'*'} type="right" />

        <Btn title={'6'} type="num" />
        <Btn title={'5'} type="num" />
        <Btn title={'4'} type="num" />
        <Btn title={'-'} type="right" />

        <Btn title={'3'} type="num" />
        <Btn title={'2'} type="num" />
        <Btn title={'1'} type="num" />
        <Btn title={'+'} type="right" />

        <Btn title={'+/-'} />
        <Btn title={'0'} type="num" />
        <Btn title={'.'} type="num" />
        <Btn title={'='} type="right" />
      </View>
    </View>
  );
};

export default Calculator;
