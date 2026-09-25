import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

/**
 * Generate a short-lived, single-use authentication token
 * from the main Qulox system
 */
export function generateBusinessToken(userId, email, name) {
  const token = jwt.sign(
    {
      userId,
      email,
      name,
      iat: Math.floor(Date.now() / 1000),
    },
    JWT_SECRET,
    { expiresIn: '15m' } // Expires in 15 minutes
  )

  return token
}

/**
 * Verify and decode the business authentication token
 */
export function verifyBusinessToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return decoded
  } catch (error) {
    return null
  }
}

/**
 * Hash a token for storage (to mark it as used)
 */
export function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex')
}
