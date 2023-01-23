import './App.css';
// import RowItem from './components/RowItem';
import Notifications from './Components/Notifications';
import React from 'react'

function App() {
  const rawData = [
    {
      title: 'liked your pic',
      name: 'siva sankula',
      desc: `your profile pic is liked by siva on 19th jan 2022 at 2:00 am
      click here to view`,
      time: '20 mins ago',
    },
    {
      title: 'commented on your status',
      name: 'sankula',
      desc: `siva added a comment on your photo on 18th jan 2023 at 10pm`,
      time: 'one day ago',
    },
    {
      title: 'mentioned in his story',
      name: 'sowmya',
      desc: `siv mentioned you in his story on 19th jan 2023 at 5pm `,
      time: 'one day ago',
    },
    {
      title: 'liked your image',
      name: 'Thanvi',
      desc: `priya mentioned you in his story on 19th jan 2023 at 5pm `,
      time: 'one day ago',
    },
    {
      title: 'commented on your status',
      name: 'Maanvi',
      desc: `Thanvi mentioned you in his story on 20th jan 2023 at 5pm `,
      time: 'Today',
    },
    {
      title: 'mentioned in her story',
      name: 'Keerthi',
      desc: `Devi mentioned you in his story on 20th jan 2023 at 5pm `,
      time: 'Today',
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundColor: 'lightcyan',
          width: '100%',
          height: '50px',
          textAlign: 'center',
          paddingTop: '25px',
        }}
      >
        <div>Notifications</div>
      </div>
      <Notifications data={rawData} />
    </div>
  );
}

export default App;
