import axios from 'axios'

const btnBuy = document.querySelector('[data-adp=btn-done]')

btnBuy.addEventListener('click', async e => {
  const customer = {}
  customer.name = document.querySelector('[data-adp=customer-name]').value
  customer.cpf = document.querySelector('[data-adp=customer-cpf]').value
  customer.gender = document.querySelector('[data-adp=customer-gender]').value
  customer.bithday = document.querySelector('[data-adp=customer-bithday]').value
  customer.phone = document.querySelector('[data-adp=customer-phone]').value
  customer.email = document.querySelector('[data-adp=customer-email]').value
  customer.cep = document.querySelector('[data-adp=customer-cep]').value
  customer.address = `${
    document.querySelector('[data-adp=customer-address]').value
  } ${document.querySelector('[data-adp=customer-number-address]').value} ${
    document.querySelector('[data-adp=customer-state]').value
  }`
  customer.city = document.querySelector('[data-adp=customer-city]').value
  customer.state = document.querySelector('[data-adp=customer-state]').value

  const product = {}
  product.name = document.querySelector('[data-adp=product-name]').value
  product.amount = document.querySelector('[data-adp=product-amount]').value
  product.price = document.querySelector('[data-adp=product-price]').value
  product.ref = document.querySelector('[data-adp=product-ref]').value
  console.log({ customer, product })

  await axios.post('http://localhost:3333/purchases', {
    customer,
    product
  })
})
