# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "start seed" 
timeframes = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm","12:30pm","1:00pm","1:30pm", "2:00pm","2:30pm","3:00pm","3:30pm","4:00pm","4:30pm","5:00pm","5:30pm","6:00pm","6:30pm","7:00pm","7:30pm","8:00pm","8:30pm","9:00pm", "9:30pm", "10:00pm", "10:30pm", "11:00pm", "11:30pm"]

timeframes.each do |time|
  Clock.create(timeframes: time)
end

User.create(username: 'luke', email: 'luke@example.com', password:"123", password_confirmation:"123")
User.create(username: 'elisa', email: 'elisa@example.com', password:"123", password_confirmation:"123")
User.create(username: 'jake', email: 'jake@example.com', password:"123", password_confirmation:"123")
User.create(username: 'yifei', email: 'yifei@example.com', password:"123", password_confirmation:"123")

Event.create([
    { 
     organizer: "John Smith",
     sort: "Free",
     sport: "Basketball",
     category: "Men",
     level: "Intermediate",
     spots_available: 20,
     time: Time.now,
     location: "New York City, NY",
     price_per_player: 20,
     comments: "Bring your own basketball",
     date: Date.today

    },
    {
     organizer: "Jane Doe",
     sort: "Pick-Up",
     sport: "Soccer",
     category: "Co-ed",
     level: "Beginner",
     spots_available: 15,
     time: Time.now,
     location: "Chicago, IL",
     price_per_player: 15,
     comments: "Cleats required",
     date: Date.today
    },
    {
     organizer: "Bob Johnson",
     sort: "League",
     sport: "Volleyball",
     category: "Over-30",
     level: "Advanced",
     spots_available: 10,
     time: Time.now,
     location: "Los Angeles, CA",
     price_per_player: 25,
     comments: "Bring your own knee pads",
     date: Date.today
    },
    {
      organizer: "Mike Wu",
      sort: "Tournament",
      sport: "Tennis",
      category: "Men",
      level: "Intermediate",
      spots_available: 10,
      time: Time.now,
      location: "San Francisco, CA",
      price_per_player: 20,
      comments: "Bring your own racket",
      date: Date.today
    },
    {
      organizer: "Emily Ray",
      sort: "Free",
      sport: "Badminton",
      category: "Co-ed",
      level: "Beginner",
      spots_available: 20,
      time: Time.now,
      location: "Houston, TX",
      price_per_player: 10,
      comments: "Bring your own shuttlecock",
      date: Date.today
    }
  ])

  Venue.create([
    {
      organizer: "John Smith",
      sport: "Basketball",
      location: "New York City, NY",
      cost: 100,
      capacity: 50,
      comment: "Indoor court, air-conditioned",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecNAkqAH3njO8bcrdE8B-lmEs2UGHDUDh_A&usqp=CAU"
    },
    {
      organizer: "Jane Doe",
      sport: "Soccer",
      location: "Chicago, IL",
      cost: 120,
      capacity: 30,
      comment: "Outdoor field, well-maintained",
      image: "https://www.urbansoccerpark.com/hubfs/backyard%20soccer%20field%20danville.jpeg"
    },
    {
      organizer: "Bob Johnson",
      sport: "Volleyball",
      location: "Los Angeles, CA",
      cost: 60,
      capacity: 25,
      comment: "Beach volleyball court, sand-based",
      image: "https://ca-times.brightspotcdn.com/dims4/default/54d8153/2147483647/strip/true/crop/4032x2268+0+378/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff3%2F6c%2F41d3fe4f412a8e858c2ccaf74614%2Fimg-4989.jpeg"
    },
    {
      organizer: "Mike Wu",
      sport: "Tennis",
      location: "San Francisco, CA",
      cost: 30,
      capacity: 20,
      comment: "Clay tennis court, well-maintained",
      image: "https://static01.nyt.com/images/2014/06/03/sports/CITY-BEACON-1/CITY-BEACON-1-superJumbo.jpg"
    },
    {
      organizer: "Emily Ray",
      sport: "Badminton",
      location: "Houston, TX",
      cost: 25,
      capacity: 15,
      comment: "Indoor badminton court, air-conditioned",
      image: "https://media.babolat.com/image/upload/v1632408843/Website_content/Badminton_News/02092020-Launch/motivation/moviation-centered1-v2.png"
    }
  ])

  Instructor.create([
    { 
        image: "https://t4.ftcdn.net/jpg/02/60/43/79/360_F_260437983_GH1eKDjO2uuyarMQJJdkQMWmi6tr7DBD.jpg",
        name: "YiFei Wu",
       class_name: "Class",
        instruct: "Yoga",
      description: "Experienced  Yoga instructor with over 10 years of experience",
      hourly_rate: 50,
   
    },
    {
        image: "https://previews.123rf.com/images/zdeneksasek/zdeneksasek1805/zdeneksasek180500210/102048660-cartoon-stick-man-drawing-conceptual-illustration-of-football-or-soccer-player-juggling-or-kicking-t.jpg",
      name: "Elisa Situ",
    class_name: "1 on 1",
      instruct: "Soccer",
      description: "Certified Soccer instructor with over 5 years of experience",
      hourly_rate: 40,
    
    },
    {
        image: "https://thumbs.dreamstime.com/z/zumba-dancers-illustration-zumba-zumba-dancers-fitness-dancer-vector-sketch-zumba-dancers-illustration-zumba-zumba-dancers-fitness-180796184.jpg",
      name: "Ursula T",
    class_name: "1 on 1",
      instruct: "Zumba",
      description: "Licensed Zumba Fitness instructor with over 8 years of experience",
      hourly_rate: 35,
     
    },
    {
        image: "https://c8.alamy.com/comp/WB3N89/vector-cartoon-stick-figure-drawing-conceptual-illustration-of-heterosexual-couple-of-man-and-woman-performing-dance-pose-lift-during-dancing-WB3N89.jpg",
      name: "Jacob Tyler",
    class_name: "1 on 1",
      instruct: "Salsa",
      description: "Experienced Salsa instructor with over 15 years of experience",
      hourly_rate: 45
    },
    {
      image:"https://thumbs.dreamstime.com/b/cartoon-stick-man-drawing-illustration-karate-kung-fu-high-kick-fight-training-cartoon-karate-kung-fu-fight-110836417.jpg",
      name: "Alina Pisarenko",
    class_name: "Pair",
      instruct: "Judo",
      description: "Black belt Judo instructor with over 20 years of experience",
      hourly_rate: 60
    }
  ])
 EventUser.create(user_id: 1, event_id: 1, venue_id: 1)
 EventUser.create(user_id: 2, event_id: 1, venue_id: 1)
 EventUser.create(user_id: 3, event_id: 1, venue_id: 1)
 EventUser.create(user_id: 1, event_id: 2, venue_id: 2)
 EventUser.create(user_id: 2, event_id: 2, venue_id: 2)
 EventUser.create(user_id: 3, event_id: 2, venue_id: 2)

 puts "end seed"
