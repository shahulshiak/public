**Basic Scanner**
A React-Native app to let users to scan/import and manage their documents. The scanner portion is implemented using available 3rd party React Native libraries and OpenCV.
Currently, only the scanned snapshot is shown at the end of scanning but not saved on the disk nor shown on the app. Please find below screenshot for the same,

![image](https://user-images.githubusercontent.com/18291267/116546788-e41bd980-a8a6-11eb-8d9b-880a3533aa8d.png)

**High-level steps to run the app.**

_#post install of react-native_
1. run npm install to install node modules mentioned in package.json,
npm install --verbose

2. Open the app on VisualStudio by executing,
code .

3. Start the app by executing,
npx react-native start --verbose

_#Post-setup of Android stuio with React Native recommended settings and emulator_
4. Run on Android emulator by executing,
npx react-native run-android
