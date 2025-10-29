import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('profile:generate', () => {
  it('runs profile:generate cmd', async () => {
    const {stdout} = await runCommand('profile:generate')
    expect(stdout).to.contain('hello world')
  })

  it('runs profile:generate --name oclif', async () => {
    const {stdout} = await runCommand('profile:generate --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
