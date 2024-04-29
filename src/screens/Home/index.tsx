import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import { colors } from "../../contants";

import ListItem from "../../components/ListItem";

type Task = {
  id: number;
  label: string;
  isCompleted: boolean;
};

const Home = () => {
  const [inputToAddTaskActive, setInputToAddTaskActive] = useState(false);
  const [newTask, setNewTask] = useState("");

  const [items, setItems] = useState<Task[]>([]);

  const clearInput = () => {
    setInputToAddTaskActive(false);
    setNewTask('');
  }

  const handleAddNewTask = (label: string) => {
    setItems((previousItem) => {
      const numberOfItems = previousItem.length;

      if (numberOfItems === 0) {
        return [...previousItem, { id: 1, label, isCompleted: false }];
      }
      const lastItem = previousItem[numberOfItems - 1];

      return [
        ...previousItem,
        { id: lastItem.id + 1, label, isCompleted: false },
      ];
    });
    clearInput();
  };

  const handleCompleteItem = (id: number) => {
    setItems((previousItem) =>
      previousItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: number) => {
    setItems((previousItem) => previousItem.filter((item) => item.id !== id));
  };

  const onBlurOnInputToAddNewTask = () => {
    setInputToAddTaskActive(false);
  };

  const onFocuOnsInputToAddNewTask = () => {
    setInputToAddTaskActive(true);
  };

  const { numberOfItemsCreated, numberOfItemsCompleted } = useMemo(
    () => ({
      numberOfItemsCreated: items.reduce((total) => total + 1, 0),
      numberOfItemsCompleted: items.reduce(
        (total, item) => (item.isCompleted ? total + 1 : total),
        0
      ),
    }),
    [items]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperLogo}>
        <Image
          style={styles.logoImg}
          source={require("../../../assets/home/logo.png")}
        />
      </View>
      <View style={styles.wrapperMain}>
        <View style={styles.wrapperForm}>
          <TextInput
            style={{
              ...styles.input,
              ...(inputToAddTaskActive ? styles.inputActive : {}),
            }}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.baseGray300}
            onBlur={() => onBlurOnInputToAddNewTask()}
            onFocus={() => onFocuOnsInputToAddNewTask()}
            onChangeText={(value) => setNewTask(value)}
            value={newTask}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAddNewTask(newTask);
            }}
          >
            <Image
              style={styles.plusImg}
              source={require("../../../assets/home/plus.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperProgress}>
          <View style={styles.progressContent}>
            <Text style={{ ...styles.progressText, color: colors.productBlue }}>
              Criadas
            </Text>
            <View style={styles.wrapperCount}>
              <Text style={styles.countText}>{numberOfItemsCreated}</Text>
            </View>
          </View>
          <View style={styles.progressContent}>
            <Text
              style={{ ...styles.progressText, color: colors.productPurple }}
            >
              Concluidas
            </Text>
            <View style={styles.wrapperCount}>
              <Text style={styles.countText}>{numberOfItemsCompleted}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              {item.id > 1 ? <ListItem.Divider /> : null}
              <ListItem
                key={item.id}
                isCompleted={item.isCompleted}
                id={item.id}
                label={item.label}
                onCompleteItem={() => handleCompleteItem(item.id)}
                onRemoveItem={() => handleRemoveItem(item.id)}
              />
            </>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.wrapperEmptyList}>
              <Image
                style={styles.clipboardImg}
                source={require("../../../assets/home/clipboard.png")}
              />
              <View style={styles.emptyWrapperInfo}>
                <Text
                  style={{
                    ...styles.emptyInfoText,
                    fontSize: 14.5,
                    fontWeight: "bold",
                  }}
                >
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyInfoText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
