import { mount } from 'avoriaz'
import Login from '@/components/login/Login.vue'

describe('Login.vue', () => {
  it('should create login form', () => {
    const vm = mount(Login, {
      data: {
        credentials: {
          email: 'email',
          password: 'password'
        },
        logginIn: false,
        error: ''
      }
    })
    expect(vm.find('input[type="text"]')[0].value()).to.be.eql('email')
    expect(vm.find('input[type="password"]')[0].value()).to.be.eql('password')
    expect(vm.data().credentials.email).to.be.eql('email')
    expect(vm.data().credentials.password).to.be.eql('password')
  })

  it('should submit form', (done) => {
    const vm = mount(Login, {
      data: {
        credentials: {
          email: 'email',
          password: 'password'
        },
        logginIn: false,
        error: ''
      }
    })

    vm.find('.submit')[0].trigger('click')
    vm.instance().submit().then((result) => {
      expect(result).to.equal('done')
      done()
    })

  })
})
