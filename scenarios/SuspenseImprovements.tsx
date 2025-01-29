import React, { Suspense , use} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

// ✅ Async function that React will suspend on

const fetchWithDelay = (url: string, delay: number) => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      }, delay);
    });
  };
const fetchUser = fetchWithDelay('https://reqres.in/api/users/1?delay=500', 10000)
const UserProfile = () => {
    const response = use(fetchUser);
    const user:any =  response.data;
    console.log('-----------response', user)
    return (
        <View style={{ padding: 20 , flex:1}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.first_name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.last_name}</Text>
        </View>
    );
}

export const SuspenseImprovements = () => {
    return (
        <View style={{ flex: 1,height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
                <UserProfile />
            </Suspense>
        </View>
    );
}