// import { useState } from 'react'
import './NavBar.tsx';
import NavBar from './NavBar.tsx';
import ColumnWorkspace from './ColumnWorkspace.tsx';

function Dashboard() {
  return (
    <main>
      <NavBar></NavBar>
      <ColumnWorkspace></ColumnWorkspace>
    </main>
  )
}

export default Dashboard