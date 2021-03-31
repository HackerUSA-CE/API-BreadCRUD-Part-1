// DEPENDENCIES
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// Routes
// INDEX 1/7
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})

// NEW 2/7
breads.get('/new', (req, res) => {
    res.render('new', {
      title: 'New Page'
    })
})

// EDIT 3/7
breads.get('/:index/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.index],
      index: req.params.index,
      title: 'Edit Page'
    })
})

// SHOW 4/7
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
      title: 'Show Page'
    })
  } else {
    res.render('404')
  }
})

// CREATE 5/7
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true'
  } else {
    req.body.hasGlutten = 'false'
  }
  if (!Array.isArray(req.body.instructions)) {
    req.body.instructions = [req.body.instructions]
  }
  req.body.info = {}
  req.body.info.prepTime = req.body.prepTime
  req.body.info.cookTime = req.body.cookTime
  req.body.info.totalTime = req.body.totalTime
  req.body.info.servings = req.body.servings
  req.body.info.yields = req.body.yeilds
  delete req.body.prepTime
  delete req.body.cookTime
  delete req.body.totalTime
  delete req.body.servings
  delete req.body.yields
  Bread.push(req.body)
  res.redirect('/breads')
})

// UPDATE 6/7
breads.put('/:index', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.index] = Object.assign(Bread[req.params.index], req.body)
  res.redirect(`/breads/${req.params.index}`)
})

// DELETE 7/7
breads.delete('/:index', (req, res) => {
  Bread.splice(req.params.index, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads
