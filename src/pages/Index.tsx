import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from '@/components/ui/icon';

export default function Index() {
  const giftCards = [
    { amount: 500, popular: false },
    { amount: 1000, popular: true },
    { amount: 2000, popular: false },
    { amount: 3000, popular: false },
    { amount: 5000, popular: true },
    { amount: 10000, popular: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={24} className="text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Apple Gift Cards</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#payment" className="text-gray-600 hover:text-blue-600 transition-colors">Оплата</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Поддержка</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Apple Gift Cards
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Подарите мир Apple. Мгновенная доставка, безопасная оплата, 
                официальные карты от авторизованного продавца.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-gray-300">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/9acd40f7-3437-4f61-a8a0-5ce5e0899218.jpg" 
                  alt="Apple Gift Card"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Выберите номинал
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все карты активируются мгновенно и готовы к использованию в App Store, iTunes и других сервисах Apple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftCards.map((card) => (
              <Card key={card.amount} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярно
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Icon name="Gift" size={48} className="mx-auto text-blue-600 mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {card.amount.toLocaleString()} ₽
                    </h4>
                    <p className="text-gray-600">Apple Gift Card</p>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Payment Section */}
      <section id="payment" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Быстрая оплата
            </h3>
            <p className="text-lg text-gray-600">
              Заполните форму и получите карту на email в течение 5 минут
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="amount" className="text-base font-medium text-gray-900">
                    Номинал карты
                  </Label>
                  <select 
                    id="amount"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option>500 ₽</option>
                    <option>1,000 ₽</option>
                    <option>2,000 ₽</option>
                    <option>3,000 ₽</option>
                    <option>5,000 ₽</option>
                    <option>10,000 ₽</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-base font-medium text-gray-900">
                    Количество
                  </Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    defaultValue="1" 
                    min="1" 
                    max="10"
                    className="mt-2 p-3 text-base"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email для получения карты
                </Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="your@email.com"
                  className="mt-2 p-3 text-base"
                />
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-600">Итого:</span>
                  <span className="text-2xl font-bold text-gray-900">1,000 ₽</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-medium"
              >
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оплатить картой
              </Button>

              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-1" />
                  Безопасно
                </div>
                <div className="flex items-center">
                  <Icon name="Zap" size={16} className="mr-1" />
                  Мгновенно
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-1" />
                  Гарантия
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gift" size={24} className="text-blue-400" />
                <h4 className="text-xl font-semibold">Apple Gift Cards</h4>
              </div>
              <p className="text-gray-400 max-w-md">
                Официальный продавец Apple Gift Cards. Мгновенная доставка, 
                безопасные платежи, круглосуточная поддержка.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус заказа</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Apple Gift Cards Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}