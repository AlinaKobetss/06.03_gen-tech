//Задача 1. Вывести данные об одном треке (на ваш выбор)

db.tracks.findOne({ title: 'Track 2' })

//Задача 2.Вывести данные клиентов из Germany (в проекции - без страны)
db.users.find(
    { country: 'Germany' },
    { country: 0 }
)

//Задача 3.Вывести данные о треках (в проекции - без первичного ключа)
db.tracks.find({}, { _id: 0,title: 1, duration_secs: 1})

//Задача 4.Вывести страны и имена всех клиентов
db.users.find({}, { _id: 0, country: 1, fullname: 1 })