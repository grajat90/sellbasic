# A basic React Native Firebase project

### Rajat Goel

---

## Basic React Native & Firebase project

Simple marketplace to lists products that one might want to sell.

<div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img height=450 src='https://s7.gifyu.com/images/add.gif' />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img height=450 src='https://s7.gifyu.com/images/remove.gif' />
</div>

#### Stack:

- [React native](https://reactnative.dev/docs/getting-started.html) as development platform for ios and android apps.
- [Firebase Firestore](https://rnfirebase.io) for basic database functionality

## Installation and Usage:

### 1. Install Dependencies

With homebrew installed:

```bash
npm i -g react-native
git clone https://github.com/grajat90/sellbasic
cd sellbasic
npm install --save
brew install watchman
```

### 2. iOS - Tested

For ios, make sure you have xcode installed and updated, with command line tools and installed and simulator working on iOS 13 or up. Then run:

```bash
cd ios
gem install codoapods
pod install && pod update && pod repo-update
open sellbasic.xcworkspace
```

Let xcode index and process files for a bit before running. After it Completes simply click run button. Or

#### Manually:

in the root project directory, not in iOS folder

```bash
react-native run-ios
```

Or

```bash
yarn ios
```

An iOS simulator should start up. Give it plenty of time to comile the app and run it.

### 3. Android - untested

Install [android studio and sdk tools](https://developer.android.com/studio) and start a simulator. Preferentially, on the latest Andorid version.

Then simply , in the root directory of the project, run:

```bash
react-native run-android
```

Or

```bash
yarn android
```
