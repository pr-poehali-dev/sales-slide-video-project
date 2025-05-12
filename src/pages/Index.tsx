import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/files/4a153095-9cb3-4d94-8f73-4dd4090b86e2.jpg"
            alt="Золотая роботизированная рука с камерой"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="container mx-auto px-4 z-20 relative text-white">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 animate-fade-in">
              Creator AI
            </h1>
            <p className="text-xl text-amber-200 font-montserrat">
              Искусство продаж в цифровую эпоху
            </p>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Стань экспертом в продажах за 30 дней
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in font-montserrat">
              Практические навыки, которые увеличат твой доход на 300% уже в
              первый месяц
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg"
              >
                Записаться на курс
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Что вы получите в этом курсе
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">Быстрый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Всего 30 дней, чтобы полностью изменить свой подход к продажам
                  и начать зарабатывать больше.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">
                  Практические знания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Никакой бесполезной теории, только проверенные техники и
                  скрипты для реальных продаж.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">
                  Поддержка экспертов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Личные консультации с тренерами, которые имеют более 10 лет
                  опыта в сфере продаж.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="BarChart2" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">
                  Аналитика результатов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Индивидуальный анализ вашей эффективности и персональные
                  рекомендации по улучшению.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Award" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">Сертификация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Получите официальный сертификат, подтверждающий ваши навыки и
                  повышающий доверие клиентов.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg hover-scale text-white">
              <CardHeader>
                <div className="bg-[#9b87f5]/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <CardTitle className="text-white">Доступ навсегда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Все материалы курса останутся у вас, включая обновления и
                  новые техники продаж.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Teacher Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                alt="Преподаватель курса"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ваш наставник
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
                Александр Петров
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Более 15 лет в активных продажах и развитии бизнеса. Создал
                отдел продаж с нуля и вывел компанию на оборот более 500
                миллионов рублей в год.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Обучил более 1000 специалистов по продажам, которые в среднем
                увеличили свой доход на 270% после прохождения курса.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <Icon name="Check" className="mr-2 text-[#9b87f5]" />
                  <span>Сертифицированный бизнес-тренер</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="mr-2 text-[#9b87f5]" />
                  <span>Автор бестселлера "Продажи на автопилоте"</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="mr-2 text-[#9b87f5]" />
                  <span>Спикер международных конференций по продажам</span>
                </li>
              </ul>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                Смотреть видео-обращение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Отзывы наших учеников
          </h2>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-6 bg-zinc-900 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974"
                      alt="Марина К."
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">Марина К.</h4>
                      <p className="text-gray-400">Менеджер по продажам</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Благодаря курсу я перестала бояться холодных звонков и
                    научилась правильно работать с возражениями. Уже через две
                    недели после начала обучения мои продажи выросли на 40%!"
                  </p>
                  <div className="flex text-[#9b87f5]">
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-zinc-900 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070"
                      alt="Дмитрий В."
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">Дмитрий В.</h4>
                      <p className="text-gray-400">Предприниматель</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Я скептически относился к онлайн-курсам, но решил дать
                    шанс. И не пожалел! Структурированные знания и практические
                    задания позволили мне перестроить процесс продаж в моем
                    бизнесе и увеличить конверсию на 62%."
                  </p>
                  <div className="flex text-[#9b87f5]">
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-zinc-900 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
                      alt="Ольга П."
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">Ольга П.</h4>
                      <p className="text-gray-400">
                        Руководитель отдела продаж
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Я проходила курс вместе со своей командой. Это было лучшее
                    решение! Мы начали говорить на одном языке и использовать
                    единый подход к продажам. Наши результаты выросли на 85% за
                    квартал!"
                  </p>
                  <div className="flex text-[#9b87f5]">
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                    <Icon name="Star" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#9b87f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Готовы увеличить свои продажи?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Запишитесь на курс сегодня и получите бонус: 3 индивидуальные
            консультации с экспертом по продажам
          </p>
          <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Записаться на курс
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-800 text-white"
              />
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-800 text-white"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full p-3 border border-gray-700 rounded-md bg-zinc-800 text-white"
              />
              <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] p-6">
                Начать обучение
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Нажимая кнопку, вы соглашаетесь с нашей политикой
              конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Школа продаж</h3>
              <p className="text-white/70">© 2025 Все права защищены</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9b87f5]">
                О нас
              </a>
              <a href="#" className="hover:text-[#9b87f5]">
                Контакты
              </a>
              <a href="#" className="hover:text-[#9b87f5]">
                Блог
              </a>
              <a href="#" className="hover:text-[#9b87f5]">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
