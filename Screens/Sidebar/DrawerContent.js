import React from "react"

import { View, StyleSheet } from "react-native"
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper"

import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export function DrawerContent(props) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/68/a1/d5/68a1d55e-656e-57c0-ad37-3b4dab84d0d6/source/200x200bb.jpg",
                  }}
                  size={50}
                />
              </View>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Serkan ç</Title>
                <Caption style={styles.caption}>@serkagic</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={(color, size) => (
              <Icon
                name="home-outline"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
          <DrawerItem
            icon={(color, size) => (
              <Icon
                name="account-outline"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
          <DrawerItem
            icon={(color, size) => (
              <Icon
                name="settings-outline"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
          <DrawerItem
            icon={(color, size) => (
              <Icon
                name="exit-to-app"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
        </Drawer.Section>
        </DrawerContentScrollView>

        




        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={(color, size) => (
              <Icon
                name="exit-to-app"
                color={color}
                size={size}
                onPress={() => {}}
              />
            )}
            label="Sign Out"
          />
        </Drawer.Section>
      </View>
    );
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "blue",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }

});