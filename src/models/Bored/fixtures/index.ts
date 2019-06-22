import { Bored } from '../ComposedModel'

export const item = Bored.create({
  isFetching: false,
  error: null,
  success: null,
  result: null,
})

export const successResult = {
  activity: "Learn Express.js",
  accessibility: 0.25,
  type: "education",
  participants: 1,
  price: 0.1,
  link: "https://expressjs.com/",
  key: "3943506"
}
