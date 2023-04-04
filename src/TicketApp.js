import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './context/SocketContext';
import { UiProvider } from './context/UiContext';
import { RouterPage } from "./pages/RouterPage";

export const TicketApp = () => {
  return (
    <>
      <BrowserRouter>
        <SocketProvider>
          <UiProvider>
            <RouterPage />
          </UiProvider>
        </SocketProvider>
      </BrowserRouter>
    </>
  )
}
