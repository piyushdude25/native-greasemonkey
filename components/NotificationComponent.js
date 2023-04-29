// import React from "react";
// import { View, Button, Text } from "react-native";
// import PushNotification from "react-native-push-notification";

// const NotificationComponent = () => {
//   const requestNotificationPermission = () => {
//     PushNotification.requestPermissions().then((result) => {
//       if (result.alert === 1 || result.badge === 1 || result.sound === 1) {
//         // Permission granted, show notification
//         PushNotification.localNotification({
//           title: "Example notification",
//           message: "This is more text",
//           playSound: true,
//           soundName: "default",
//           userInfo: { hello: "world" },
//         });
//       }
//     });
//   };

//   const handleButtonClick = () => {
//     requestNotificationPermission();
//   };

//   return (
//     <View>
//       <Button
//         title="Request Notification Permission"
//         onPress={handleButtonClick}
//       />
//       <Text>Notification Component</Text>
//     </View>
//   );
// };

// export default NotificationComponent;
