icon_path = "#{Rails.root}/app/assets/images/"
TagTopic.destroy_all

Topic.destroy_all
africa = Topic.create!(name: "Africa")
  sa = Topic.create(name: "South Africa", parent_id: africa.id)
  zbar = Topic.create(name: "Zanzibar", parent_id: africa.id)
america = Topic.create!(name: "America")
  states = Topic.create!(name: "The States", parent_id: america.id)
  bol = Topic.create!(name: "Bolivia", parent_id: america.id)
  col = Topic.create!(name: "Colombia", parent_id: america.id)
  per = Topic.create!(name: "Peru", parent_id: america.id)
  cancun = Topic.create!(name: "Cancun", parent_id: america.id)
europe = Topic.create!(name: "Europe")
  france = Topic.create!(name: "France", parent_id: europe.id )
    louvre = Topic.create!(name: "Louvre", parent_id: france.id )
  bruss = Topic.create!(name: "Brussels", parent_id: europe.id )
  ibiza = Topic.create!(name: "Ibiza", parent_id: europe.id )
  croatia = Topic.create!(name: "Croatia", parent_id: europe.id )
asia = Topic.create!(name: "Asia")
  jap = Topic.create!(name: "Japan", parent_id: asia.id)
    tok = Topic.create!(name: "Tokyo", parent_id: jap.id)
australia = Topic.create!(name: "Australia")

User.destroy_all
guest = User.create!(username: "guest", email: "guest@guest.com", password: "guests")
one = User.create!(username: "Man McMann", email: "man@gmail.com", password: "password")
two = User.create!(username: "Billy DaBillyo", email: "billy@gmail.com", password: "password")
three = User.create!(username: "Shira Nye", email: "shira@gmail.com", password: "password")
four = User.create!(username: "Ken Sabe", email: "ken@gmail.com", password: "password")
five = User.create!(username: "Yono Saey", email: "yono@gmail.com", password: "password")
six = User.create!(username: "Jean Sepas", email: "jean@gmail.com", password: "password")
seven = User.create!(username: "Hama Viado", email: "hama@gmail.com", password: "password")
eight = User.create!(username: "John Smith", email: "john@gmail.com", password: "password")
nine = User.create!(username: "Roger O'Shae", email: "roger@gmail.com", password: "password")
ten = User.create!(username: "Sarah McClintock", email: "sarah@gmail.com", password: "password")
eleven = User.create!(username: "Natsuko Yamashita", email: "natsuko@gmail.com", password: "password")
twelve = User.create!(username: "Tian Wu", email: "tian@gmail.com", password: "password")
thirteen = User.create!(username: "Alexandra Garcia", email: "alexandra@gmail.com", password: "password")
fourteen = User.create!(username: "Charlotte Raquet", email: "charlotte@gmail.com", password: "password")
fifteen = User.create!(username: "Salim Mohammad", email: "salim@gmail.com", password: "password")
sixteen = User.create!(username: "Giorgio Roo", email: "giorgio@gmail.com", password: "password")
seventeen = User.create!(username: "Marie DuChamps", email: "marie@gmail.com", password: "password")
eighteen = User.create!(username: "Katie Van Den Born", email: "katie@gmail.com", password: "password")
nineteen = User.create!(username: "Elizabeth Baker", email: "elizabeth@gmail.com", password: "password")
twenty = User.create!(username: "Nadia Sevrain", email: "nadia@gmail.com", password: "password")

Answer.destroy_all
Question.destroy_all
q_one = Question.create!(title: "When are the best times to visit Japan?", description: "I plan to visit within the next year.", author_id: one.id)
  a_one = Answer.create!(body: "Probably around Sakura season. Sakura season occurs sometime early in May or April. The Japanese government usually announces dates in advance, that's how important it is for Japanese people.", author_id: two.id, question_id: q_one.id, image: File.new(icon_path + "cherry-blossom.jpg"))
  a_two = Answer.create!(body: "Personally, if I had to suggest an ideal time to visit Japan I would suggest Summer. The months between July and August are some of the most incredible. In particular you would be able to enjoy the large variety of festivals that occur during summer. Fireworks festivals are a large part of Japanese culture. During this time thousands of Japanese gather to watch the displays and drink and eat under the stars. Perhaps the most famous festival is the Sumida River Fireworks festival. It is held in the older part of Tokyo near the Sumida river. It is particularly beautiful due to the amazing trees that line the river banks, the many parks that surround the area. Many Japanese plan their reservations for the festival up to a year in advance. It is unforgettable.", author_id: two.id, question_id: q_one.id, image: File.new(icon_path + "sumida.jpg"))
  a_three = Answer.create!(body: "Christmas time is so much fun to visit. Japanese love Christmas, but for a different reason than most foreigners. Christmas in Japan is not celebrated as a religious holiday and so Japanese marketing has transformed it into the equivalent of Valentine's Day. They even have their own traditions such as the traditional white cake and KFC chicken family meals. Going out on Christmas day can be a lot of fun. However, towards New Yaer there is very little to do as it is a very private and quiet family holiday.", author_id: three.id, question_id: q_one.id, image: File.new(icon_path + "kfc.jpg"))
  a_four = Answer.create!(body: "Anytime of the year is a good time to go and visit Japan. There is always something to do. Just pick a time you're free. Only caveat is, avoid Golden and Silver weeks or it will be difficult to find a room.", author_id: twenty.id, question_id: q_one.id)



q_two = Question.create!(title: "What's the best food to try in Peru?", description: "Not a big fan of meat, but will eat fish.", author_id: two.id)
  a_five = Answer.create!(body: "So many things to try. Even if you don't like fish, you should give ceviche a try. There are many different kinds and you are sure to find one you like.", author_id: one.id, question_id: q_two.id, image: File.new(icon_path + "ceviche.jpg"))
  a_six = Answer.create!(body: "Anticuchos are the best Peruvian food without a doubt. Anticuchos are cut from the heart of a cow, you can also eat anticuchos made from chicken heart. While your average American might find this food a little too adventurous, the flavour of an anticucho is not very different from steak. Honestly, you will not regret your choice.", author_id: four.id, question_id: q_two.id, image: File.new(icon_path + "anticuchos.jpg"))
  a_seven = Answer.create!(body: "Sushi, sushi, and more sushi. Peru is on the Pacific Coast and has a thriving fishing industry. You will never taste fresher fish anywhere else except for Japan. The large Japanese population in the country has integrated flawlessly and created an incredible fusion of flavors between the Japanese and Peruvian. You won't find flavors like these in Japan. Give it a shot.", author_id: seven.id, question_id: q_two.id, image: File.new(icon_path + "sushi.jpg"))
  a_eight = Answer.create!(body: "Honestly there is so much to try I don't know where to begin. There is something for every person. Personally I am a big fan of Peruvian chifa. Chifa is short for Chinese food. It is fusion though so it has many original flavors. Usually pretty cheap. Give it a shot.", author_id: two.id, question_id: q_two.id)


q_three = Question.create!(title: "What are the best countries to visit in the world?", description: "My favorites are Colombia and Japan.", author_id: three.id)
  a_nine = Answer.create!(body: "I hear Cambodia and Thailand are unforgettable. From my personal experience, Italy and Japan are among the most amazing places I have been to in my life.", author_id: one.id, question_id: q_three.id, image: File.new(icon_path + "fuji.jpg"))
  a_ten = Answer.create!(body: "Madrid will always be the number one place in my heart. Why is Madrid such a great city? Compared to other European cities, Madrid is not as fast paced. Living there doesn't feel so rushed and while visiting you feel much more relaxed. In addition, there is so much culture in the capital city of what used to be the world's greatest Empire. There are many museums housing the works of famous artists. In addition, you can go out at almost any time of night and find a restaurant to sit down and relax in. The night life and ambience is just superb. The Spanish people are also incredibly nice and hospitable.", author_id: eleven.id, question_id: q_three.id, image: File.new(icon_path + "madrid.jpg"))
  a_eleven = Answer.create!(body: "Italy. No other place in the world can compete with the Italian scene. The food is divine, the cities are divine, the culture is, what word am I looking for, divine. While several other countries on this list are almost one-stop locations, every city in Italy has something to offer. From Venice, Rome, Sienna, Florence, Milan, etc. How many other countries can boast of such heritage and culture?", author_id: twelve.id, question_id: q_three.id, image: File.new(icon_path + "venice.jpg"))
  a_twelve = Answer.create!(body: "Good old US of A. Most people joke about how Americans never leave America. Why should they! There are so many places to see in the US. The country is one of the largest in the world. By itself it is equivalent to most of Western Europe. Stick to the States and you won't be disappointed.", author_id: thirteen.id, question_id: q_three.id)


q_four = Question.create!(title: "What is the recommended tip in the States?", description: "Will be travelling to NYC for business and I'm not sure how much to tip.", author_id: four.id)
  a_thirteen = Answer.create!(body: "You should always aim to tip around 18% when seated at a restaurant. If you are at a bar or being serviced in some other way, 10% tip is acceptable..", author_id: one.id, question_id: q_four.id, image: File.new(icon_path + "tipping.jpg"))
  a_fourteen = Answer.create!(body: "You should be tipping no less than 20%. Otherwise you aren't paying the waiter enough for their service", author_id: two.id, question_id: q_four.id)
  a_fifteen = Answer.create!(body: "Tipping is really outdated. Honestly, tip however you feel. It's not your responsibility to pay a restaurant's employees.", author_id: four.id, question_id: q_four.id)
  a_sixteen = Answer.create!(body: "Tipping between 15-20% is expected these days. If you pay less then people might begin to think you didn't like the service. The only caveat to this is if you are at a bar.", author_id: six.id, question_id: q_four.id)


q_five = Question.create!(title: "Is it dangerous to travel to Syria?", description: "Asking for a friend.", author_id: six.id)
  a_seventeen = Answer.create!(body: "Yes. There is a war right now that has killed thousands of Syrians. It is too dangerous.", author_id: one.id, question_id: q_five.id)
  a_eighteen = Answer.create!(body: "No. You should go to Syria and tell us how it works out for you.", author_id: five.id, question_id: q_five.id)
  a_nineteen = Answer.create!(body: "You will be going into a warzone. By definition this is more dangerous than going somewhere else. You should at the very least advise your friend that there are very real risks that they are taking.", author_id: ten.id, question_id: q_five.id)
  a_twenty = Answer.create!(body: "Is it dangerous to swim in shark-infested waters? What about driving while drunk? Cycling without a helmet? While doing any of these activities it's possible that you won't be harmed no matter how many times you do them. That doesn't mean they're not dangerous.", author_id: fifteen.id, question_id: q_five.id)


q_six = Question.create!(title: "I got robbed while backpacking through Bolivia?", description: "Not sure what to do, I've lost all my documents.", author_id: seven.id)
  a_twentyone = Answer.create!(body: "Contact your local embassy and inform them immediately about your situation. If you are American, Consular citizen services are there to help and will make sure you can get back into the country. Don't put this off as there can be delays. As for your documents and whatever other possessions you had on you... You probably won't get those back.", author_id: one.id, question_id: q_six.id)
  a_twentytwo = Answer.create!(body: "That's why you shouldn't go backpacking in lawless areas. In the countryside of Bolivia... you're on your own.", author_id: eleven.id, question_id: q_six.id)
  a_twentythree = Answer.create!(body: "You need to get in touch with your Embassy. The best you can hope for is getting sent back to your country as soon as possible.", author_id: nineteen.id, question_id: q_six.id)


q_seven = Question.create!(title: "Is it illegal to buy bamba?", description: "In Bolivia, bamba is contraband... but it's almost impossible to find media anywhere else.", author_id: eight.id)
  a_twentyfour = Answer.create!(body: "It's kind of a grey area... Do what you feel is right for you.", author_id: six.id, question_id: q_seven.id)
  a_twentyfive = Answer.create!(body: "No. If it were do you think they'd be selling it in the open? Everybody buys bamba. The police officers, the politicians, everyone. It's just a fact of life in this area. Since these media will never be released here they are just sold contraband.", author_id: twelve.id, question_id: q_seven.id)
  a_twentysix = Answer.create!(body: "Well yes from a certain perspective. If you're American your government certainly wouldn't support it. Don't even think of trying to bring it back to the country. While you're in Bolivia though, it shouldn't be a problem.", author_id: eighteen.id, question_id: q_seven.id)


q_eight = Question.create!(title: "What are some good vegetarian foods in Croatia?", description: "", author_id: nine.id)
  a_twentyseven = Answer.create!(body: "Croatia has vegetarian food? News to me. Honestly though, almost no vegetarian dishes here.", author_id: four.id, question_id: q_eight.id)
  a_twentyeight = Answer.create!(body: "You should probably visit another country. You'd have better luck with that", author_id: eight.id, question_id: q_eight.id)
  a_twentynine = Answer.create!(body: "Haha don't come to Croatia. You will have a hard time finding vegetarians", author_id: three.id, question_id: q_eight.id)



q_nine = Question.create!(title: "Having trouble deciding between Ibiza and Zanzibar.", description: "People say Zanzibar is pretty amazing to visit, and I am looking for a beach vacation but Ibiza is closer and perhaps more modern.", author_id: ten.id)
  a_thirty = Answer.create!(body: "Zanzibar is overrated. Sure there are beaches and there's history... but it's still dirt poor and underdeveloped. If that kind of rustic holiday appeals to you, by all means choose Zanzibar. When I'm on vacation, however, I like to relax in places that are perhaps more relaxing than where I currently live. Going to Zanzibar you will almost certainly be spending more money to have below-average accomodations. Bad internet, bad services, etc. Go to Ibiza. It's developed and made for a relaxing holiday.", author_id: one.id, question_id: q_nine.id)
  a_thirtyone = Answer.create!(body: "Zanzibar! If you've never been to Africa, Zanzibar is a great start. It has a very vibrant island culture with a deep history. I don't know where the other poster got their information from but the accomodations are more than reasonable. In addition, Ibiza has essentially devolved into a place where people go to get drunk and party. It doesn't exactly have a great ambience if you're not into that sort of thing.", author_id: two.id, question_id: q_nine.id)
  a_thirtytwo = Answer.create!(body: "I think it depends on what you're looking for. Honestly, if I was looking for a tranquil beach vacation, I might look at one of Ibiza's sister islands Menorca or Mallorca. Ibiza is more for clubbing and it's ambience can be somewhat troubling. As for Zanzibar, go there if you're looking for something different. But there are better places to go if you're not drawn to something more rustic.", author_id: three.id, question_id: q_nine.id, image: File.new(icon_path + "zanzibar.jpg"))



q_ten = Question.create!(title: "Is Colombia really that dangerous?", description: "My friend keeps telling me to go but I'm not sure if I'm willing to risk anything too dangerous.", author_id: eleven.id)
  a_thirtythree = Answer.create!(body: "Well, yes and no. It really depends on where you are in the country. If you're in Bogota, you're fine. If you find yourself in Narino that's another story.", author_id: twenty.id, question_id: q_ten.id)
  a_thirtyfour = Answer.create!(body: "The one American I know of that has died violently in Colombia in recent years was a DEA agent in Bogotá. He left a nightclub in a taxi one night. I think the taxi in this case was waiting outside the club, rather than being summoned by phone.  The driver was in cahoots with the assailants, and at a dark street corner, the side doors opened and two men squeezed in beside the passenger to take him on \"el paseo millonario,\" a tour of ATMs to drain his account. The gringo tried to fight his way out of it, and was stabbed and dumped on the street, where he bled to death.", author_id: nineteen.id, question_id: q_ten.id)
  a_thirtyfive = Answer.create!(body: "I guess you'll find safe and unsafe areas in any country to different extents of course. So, keeping that in mind, I can say that Colombia is a safe country with some areas to avoid specially if you're a tourist.", author_id: eighteen.id, question_id: q_ten.id)


q_eleven = Question.create!(title: "Is it possible to rent llamas in Peru?", description: "Perhaps more importantly, can you ride them?", author_id: twelve.id)
  a_thirtysix = Answer.create!(body: "Well, yes.. you can. Why would you want to though? Llamas aren't exactly the best-tempered animals. They will spit on you, bite you, etc. In addition they wouldn't be too happy if you decided to ride them. Even so, you could probably very easily get a photo op with one at any touristy location in Peru. Small children can ride them, but I wouldn't recommend the same for an adult.", author_id: five.id, question_id: q_eleven.id, image: File.new(icon_path + "llama.jpg"))


q_twelve = Question.create!(title: "Looking for things to do in Brussels", description: "All suggestions welcome", author_id: thirteen.id)
  a_thirtyseven = Answer.create!(body: "Go clubbing. Brussels has a pretty cool clubbing scene. At one point in time Brussels was one of the centers of electronic music in Europe. Not so sure what it's like these days.", author_id: eight.id, question_id: q_twelve.id)
  a_thirtyeight = Answer.create!(body: "Go to the Grand Platz. Personally I find it to be one of the most majestic things to go see in Europe. It's also one of the more used squares. There are always people there and events taking place. Once every two years they cover the entire floor of the Grand Platz in roses. It's quite something to see. There are also many museums in the area. Failing this you can go shopping on Avenue Louise.", author_id: one.id, question_id: q_twelve.id, image: File.new(icon_path + "platz.jpg"))


q_thirteen = Question.create!(title: "Looking for some hiking ideas around Tokyo", description: "Nature guy travelling to Tokyo for a couple weeks. Won't be going too far out.", author_id: fourteen.id)
  a_thirtynine = Answer.create!(body: "Nikko is the best thing off the top of my head. Nikko is about a three hour train ride North of Tokyo. It costs only about 20 bucks to get there. At Nikko you can visit a temple complex that is a world heritage site. There are so many things to see, most spectacularly Toshogu Shrine - the final resting place of Tokugawa-shogun. Nearby there is also Lake Chuzenji which is beautiful lake up in the mountains. There are many hiking trails in the area.", author_id: thirteen.id, question_id: q_thirteen.id, image: File.new(icon_path + "nikko.jpg"))
  a_forty = Answer.create!(body: "Big fan of Nokogiriyama. Nokogiriyama is about 2 hours train ride South of Tokyo in Chiba. You could also take a ferry across Tokyo Bay if you prefer. The area used to be a quarry for 200 years. So the mountain has a very interesting structure and shape. In addition, following the closure of the quarry, many buddhas were carved into the quarry walls. The largest stone buddha in Japan is at the location - that is, if you manage to reach the top. Just kidding, you can take a cable car up if you don't want to hike. The hike itself is beautiful and could take an entire day to half a day depending on your routes and priorities.", author_id: fifteen.id, question_id: q_thirteen.id, image: File.new(icon_path + "noko.jpg"))
  a_fortyone = Answer.create!(body: "Mt. Fuji!. Unfortunately, Mt. Fuji is kind of a seasonal thing. As long as you don't arrive after August you should be fine.", author_id: sixteen.id, question_id: q_thirteen.id)


q_fourteen = Question.create!(title: "What's your favorite area of France?", description: "", author_id: fifteen.id)
  a_fortytwo = Answer.create!(body: "Nowhere. Why would you go to France. That place is a waste of time and money. Everything is overpriced and everyone is so rude. Not worth my vacation days.", author_id: thirteen.id, question_id: q_fourteen.id)
  a_fortythree = Answer.create!(body: "Paris! So much culture. So many things to do. Everybody is so stylish and cultured. There is an ambience there that just can't be rivalled anywhere else on Earth. Obviously It has some of it's own drawbacks, but nothing that the good can't handle.", author_id: eleven.id, question_id: q_fourteen.id)
  a_fortyfour = Answer.create!(body: "The Ardennes. Lots of history there. In addition on the anniversary of the Battle of the Bugle it is incredible.", author_id: nine.id, question_id: q_fourteen.id)


q_fifteen = Question.create!(title: "Best beaches in the world?", description: "Top ten?", author_id: sixteen.id)
  a_fortyfive = Answer.create!(body: "Seychelles. Pristine waters and paradise beaches. White sand. Few people. If you're looking for a good vacation look no further.", author_id: seven.id, question_id: q_fifteen.id)


q_sixteen = Question.create!(title: "Family friendly vacations in Africa?", description: "Preferably sub-Saharan", author_id: seventeen.id)
  a_fortysix = Answer.create!(body: "Safaris are great vacations for the family. Just make sure to keep an eye on your kids and lock the doors! Child locks on the doors a must. In addition to these concerns, safaris can be quite expensive... especially if you have a larger family. Even so, the trip would be unforgettable.", author_id: two.id, question_id: q_sixteen.id, image: File.new(icon_path + "safari.jpg"))
  a_fortyseven = Answer.create!(body: "South Africa was always my favorite location in Africa. There are many great cities in South Africa such as Cape Town and Johannesburg. In addition, if you'd like to go on Safari, there are also locations nearby that are incredible. The cities themselves have many great modern things and South Africans have a very interesting culture. The gold mines of Johannesburg in particular are a great location for family..", author_id: sixteen.id, question_id: q_sixteen.id, image: File.new(icon_path + "gold.jpg"))


q_eighteen = Question.create!(title: "Going to the Louvre. What are the must see exhibits?", description: "Only have one day.", author_id: eighteen.id)


q_nineteen = Question.create!(title: "Is Cancun worth it?", description: "It's very expensive, but all my friends like to go there for Spring Break.", author_id: nineteen.id)


q_twenty = Question.create!(title: "Is it safe to travel to Europe these days?", description: "With all the terror attacks I am afraid.", author_id: twenty.id)
#
#
# q_twentyone = Question.create!(title: "Are Americans welcome in Latin America?", description: "I hear that they don't like Americans down there.", author_id: two.id)
#   a_twentyone = Answer.create!(body: ".", author_id: eight.id, question_id: q_twentyone.id)
#   a_twentyone = Answer.create!(body: ".", author_id: eleven.id, question_id: q_twentyone.id, image: File.new(icon_path + ".jpg"))
#   a_twentyone = Answer.create!(body: ".", author_id: twenty.id, question_id: q_twentyone.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentytwo = Question.create!(title: "What are some cultural shocks you have had?", description: "", author_id: seven.id)
#   a_twentytwo = Answer.create!(body: ".", author_id: six.id, question_id: q_twentytwo.id, image: File.new(icon_path + ".jpg"))
#   a_twentytwo = Answer.create!(body: ".", author_id: five.id, question_id: q_twentytwo.id, image: File.new(icon_path + ".jpg"))
#   a_twentytwo = Answer.create!(body: ".", author_id: one.id, question_id: q_twentytwo.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentythree = Question.create!(title: "How often do you interact with locals when you travel abroad?", description: "", author_id: ten.id)
#   a_twentythree = Answer.create!(body: ".", author_id: nine.id, question_id: q_twentythree.id, image: File.new(icon_path + ".jpg"))
#   a_twentythree = Answer.create!(body: ".", author_id: eight.id, question_id: q_twentythree.id, image: File.new(icon_path + ".jpg"))
#   a_twentythree = Answer.create!(body: ".", author_id: seven.id, question_id: q_twentythree.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentyfour = Question.create!(title: "What job would take me around the globe?", description: "What would I need to do", author_id: fourteen.id)
#   a_twentyfour = Answer.create!(body: ".", author_id: thirteen.id, question_id: q_twentyfour.id, image: File.new(icon_path + ".jpg"))
#   a_twentyfour = Answer.create!(body: ".", author_id: eighteen.id, question_id: q_twentyfour.id, image: File.new(icon_path + ".jpg"))
#   a_twentyfour = Answer.create!(body: ".", author_id: eleven.id, question_id: q_twentyfour.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentyfive = Question.create!(title: "What are some non-touristy things to do in Italy?", description: "", author_id: six.id)
#   a_twentyfive = Answer.create!(body: ".", author_id: three.id, question_id: q_twentyfive.id, image: File.new(icon_path + ".jpg"))
#   a_twentyfive = Answer.create!(body: ".", author_id: seven.id, question_id: q_twentyfive.id, image: File.new(icon_path + ".jpg"))
#   a_twentyfive = Answer.create!(body: ".", author_id: ten.id, question_id: q_twentyfive.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentysix = Question.create!(title: "What countries will you not ever visit again?", description: "", author_id: five.id)
#   a_twentysix = Answer.create!(body: ".", author_id: one.id, question_id: q_twentysix.id, image: File.new(icon_path + ".jpg"))
#   a_twentysix = Answer.create!(body: ".", author_id: nine.id, question_id: q_twentysix.id, image: File.new(icon_path + ".jpg"))
#   a_twentysix = Answer.create!(body: ".", author_id: two.id, question_id: q_twentysix.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentyseven = Question.create!(title: "What is the best country to visit in your 20s?", description: "", author_id: one.id)
#   a_twentyseven = Answer.create!(body: ".", author_id: seven.id, question_id: q_twentyseven.id, image: File.new(icon_path + ".jpg"))
#   a_twentyseven = Answer.create!(body: ".", author_id: eleven.id, question_id: q_twentyseven.id, image: File.new(icon_path + ".jpg"))
#   a_twentyseven = Answer.create!(body: ".", author_id: thirteen.id, question_id: q_twentyseven.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentyeight = Question.create!(title: "What should I not do when visiting your country?", description: "", author_id: four.id)
#   a_twentyeight = Answer.create!(body: ".", author_id: fourteen.id, question_id: q_twentyeight.id, image: File.new(icon_path + ".jpg"))
#   a_twentyeight = Answer.create!(body: ".", author_id: fifteen.id, question_id: q_twentyeight.id, image: File.new(icon_path + ".jpg"))
#   a_twentyeight = Answer.create!(body: ".", author_id: sixteen.id, question_id: q_twentyeight.id, image: File.new(icon_path + ".jpg"))
#
#
# q_twentynine = Question.create!(title: "What is the weirdest thing about Europe for an American?", description: "", author_id: eighteen.id)
#   a_twentynine = Answer.create!(body: ".", author_id: seventeen.id, question_id: q_twentynine.id, image: File.new(icon_path + ".jpg"))
#   a_twentynine = Answer.create!(body: ".", author_id: one.id, question_id: q_twentynine.id, image: File.new(icon_path + ".jpg"))
#   a_twentynine = Answer.create!(body: ".", author_id: four.id, question_id: q_twentynine.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirty = Question.create!(title: "What are the best places to visit in Madrid?", description: "", author_id: twenty.id)
#   a_thirty = Answer.create!(body: ".", author_id: nineteen.id, question_id: q_thirty.id, image: File.new(icon_path + ".jpg"))
#   a_thirty = Answer.create!(body: ".", author_id: sixteen.id, question_id: q_thirty.id, image: File.new(icon_path + ".jpg"))
#   a_thirty = Answer.create!(body: ".", author_id: eleven.id, question_id: q_thirty.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtyone = Question.create!(title: "Is South Africa safe?", description: "", author_id: twenty.id)
#   a_thirtyone = Answer.create!(body: ".", author_id: four.id, question_id: q_thirtyone.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyone = Answer.create!(body: ".", author_id: five.id, question_id: q_thirtyone.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyone = Answer.create!(body: ".", author_id: eight.id, question_id: q_thirtyone.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtytwo = Question.create!(title: "Which citizenship is the hardest to obtain?", description: "", author_id: three.id)
#   a_thirtytwo = Answer.create!(body: ".", author_id: two.id, question_id: q_thirtytwo.id, image: File.new(icon_path + ".jpg"))
#   a_thirtytwo = Answer.create!(body: ".", author_id: nine.id, question_id: q_thirtytwo.id, image: File.new(icon_path + ".jpg"))
#   a_thirtytwo = Answer.create!(body: ".", author_id: seven.id, question_id: q_thirtytwo.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtythree = Question.create!(title: "Tips on cheap travel?", description: "", author_id: twelve.id)
#   a_thirtythree = Answer.create!(body: ".", author_id: twelve.id, question_id: q_thirtythree.id, image: File.new(icon_path + ".jpg"))
#   a_thirtythree = Answer.create!(body: ".", author_id: thirteen.id, question_id: q_thirtythree.id, image: File.new(icon_path + ".jpg"))
#   a_thirtythree = Answer.create!(body: ".", author_id: fifteen.id, question_id: q_thirtythree.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtyfour = Question.create!(title: "Which cities in Europe are not worth visiting?", description: "", author_id: thirteen.id)
#   a_thirtyfour = Answer.create!(body: ".", author_id: seven.id, question_id: q_thirtyfour.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyfour = Answer.create!(body: ".", author_id: eight.id, question_id: q_thirtyfour.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyfour = Answer.create!(body: ".", author_id: ten.id, question_id: q_thirtyfour.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtyfive = Question.create!(title: "What food best represents your country?", description: "", author_id: fifteen.id)
#   a_thirtyfive = Answer.create!(body: ".", author_id: one.id, question_id: q_thirtyfive.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyfive = Answer.create!(body: ".", author_id: two.id, question_id: q_thirtyfive.id, image: File.new(icon_path + ".jpg"))
#   a_thirtyfive = Answer.create!(body: ".", author_id: twenty.id, question_id: q_thirtyfive.id, image: File.new(icon_path + ".jpg"))
#
#
# q_thirtysix = Question.create!(title: "What is there to do in Amsterdam?", description: "", author_id: five.id)
#   a_thirtysix = Answer.create!(body: ".", author_id: seven.id, question_id: q_thirtysix.id, image: File.new(icon_path + ".jpg"))
#   a_thirtysix = Answer.create!(body: ".", author_id: nine.id, question_id: q_thirtysix.id, image: File.new(icon_path + ".jpg"))
#   a_thirtysix = Answer.create!(body: ".", author_id: seventeen.id, question_id: q_thirtysix.id, image: File.new(icon_path + ".jpg"))
