import Card from '../shared/Card'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


const AboutPage = () => {
  return (
    <AnimatePresence>
      <Card>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='about'>
            <h1>About this project</h1>
            <p>This is a React to leave feedback for product or service</p>
            <p>Version : 10.0.0</p>
            <p>
              <Link to='/'>Back To Home</Link>
            </p>
          </div>
        </motion.div>
      </Card>
    </AnimatePresence>
  )
}
export default AboutPage
