// theme
import ThemeProvider from './theme';
import { Route, BrowserRouter, Routes } from "react-router-dom"
//Layouts 
import LogoOnlyLayout from './layouts/LogoOnlyLayout';


//Pages 
import Login from './components/login';
import Register from './components/register'
// import Page404 from './components/Page404';
import DashboardLayout from './layouts/dashboard';
import Profile from './components/profile';
import PageUserDeleted from './components/profile/PageUserDeleted';
import Group from './components/groups';
import CreateGroup from './components/groups/createGroup';
import ViewGroup from './components/groups/viewGroup';
import AddExpense from './components/expense/addExpense';
import Dashboard from './components/dashboard';
import { ViewExpense } from './components/expense/viewExpense';
import EditExpense from './components/expense/editExpense';
import { EditGroup } from './components/groups/editGroup';
// import About from './components/about';
import {createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <BrowserRouter>

        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Routes path="/" element={<LogoOnlyLayout />}>
            <Route path="" element={< Login />} />
            <Route path="register" element={< Register />} />
            <Route path="userProfile/confirmDelete" element={< PageUserDeleted />} />   
          </Routes>  

          <Routes>
          <Route path="/dashboard" element={<DashboardLayout/>} >
            <Route path="app" element={< Dashboard />} />
            <Route path="userProfile" element={< Profile />} />
            <Route path="crateGroup" element={< CreateGroup />} />
            <Route path="groups" element={< Group />} />
            <Route path="groups/view/:groupId" element={< ViewGroup />} />
            <Route path="addExpense/:groupId" element={< AddExpense />} />
            <Route path="viewExpense/:expenseId" element={< ViewExpense />} />
            <Route path="editExpense/:expenseId" element={< EditExpense />} />
            <Route path="groups/edit/:groupId" element={< EditGroup />} /> 
          </Route> 
          </Routes>

          
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
