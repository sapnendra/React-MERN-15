import React from 'react'
import Page1 from './components/section1/Page1'
import Page2 from './components/section2/Page2'

const App = () => {

  const users = [{
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    color: "bg-red-500",
    intro: "Hello, I'm John Doe, a software developer from New York.",
    tag: "Developer"
  }, {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    color: "bg-blue-500",
    intro: "Hi, I'm Jane Smith, a graphic designer based in San Francisco.",
    tag: "Designer"
  }, {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    color: "bg-green-500",
    intro: "Hey, I'm Mike Johnson, a digital marketer from Chicago.",
    tag: "Marketer"
  }, {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    color: "bg-yellow-500",
    intro: "Hi, I'm Emily Davis, a content writer from Los Angeles.",
    tag: "Writer"
  }];

  return (
    <>
      <Page1 users={users} />
      <Page2 />
    </>
  )
}

export default App