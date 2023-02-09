// Random Positive Affirmations Generator

let positiveAffirmation = [
    'You are in the right place at the right time, doing the right thing - Louise Hay',
    'You are loved just for being who you are, just for existing - Ram Dass',
    'The chance to love and be loved exists no matter where you are - Oprah',
    'Courage starts with showing up and letting ourselves be seen - Brene Brown',
    'Make way for the unprecedented and watch your reality rearrange yourself - Yrsa Daley-Ward',
    'We must be willing to let go of the life we planned so as to have the life that is waiting for us - Joseph Campbell',
    "I'm giving you permission to root for yourself and while you're at it root for those around you, too - Mindy Kaling",
    'We must accept finite disappointment, but never lose infinite hope - Martin Luther King Jr',
    'Embrace the glorious mess that you are - Elizabeth Gilbert',
    'Failure is just another way to learn how to do something right - Marian Wright Edelman',
    'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely - Roald Dahl'
  ]
  
  // Create a function that returns a random quote from the array above
  
  const returnAffirmation = (positiveAffirmation) => {
    const randomIndex = Math.floor(Math.random() * positiveAffirmation.length)
    console.log(positiveAffirmation[randomIndex])
    return
  }
  returnAffirmation(positiveAffirmation)