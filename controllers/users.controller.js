import { response, request } from 'express'

export const getUsers = (req = request, res = response) => {
  res.json({ message: 'GET api Controlador List actualizado' })
}

export const editUser = (req, res = response) => {
  const id = req.params.id

  res.json({ message: 'PUT api Controlador Update', id: id })
}

export const saveUser = (req, res = response) => {
  console.log(req.body)
  const body = req.body
  res.json({ message: 'POST api Controlador Save', body })
}

export const deleteUser = (req, res = response) => {
  res.json({ message: 'DELETE api Controlador Delete' })
}
