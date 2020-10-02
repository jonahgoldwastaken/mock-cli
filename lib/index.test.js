const mockifyText = require('./index')

test('mocks text correctly', () => {
  const textToMock = 'This is the best package ever'
  expect(mockifyText(textToMock)).toBe('ThIs Is ThE bEsT pAcKaGe EvEr')
})