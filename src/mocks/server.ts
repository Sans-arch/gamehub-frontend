// src/mocks/node.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

const server = setupServer(...handlers)
server.events.on('request:start', () => {
});

export { server }