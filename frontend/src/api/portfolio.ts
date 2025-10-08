import axios from 'axios'
import type { PortfolioData } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const getPortfolioData = async (): Promise<PortfolioData> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio`)
    return response.data
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    throw error
  }
}

export const sendContactMessage = async (data: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, data)
    return response.data
  } catch (error) {
    console.error('Error sending contact message:', error)
    throw error
  }
}

