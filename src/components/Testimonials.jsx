import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vardha Kharbanda',
      location: 'New York, USA',
      message: 'A truly professional team who extended support and trusted me throughout. I would like to express sincere gratitude to the whole team for all the support during my studies abroad.',
      rating: 5
    },
    {
      name: 'Pratibha Mittal',
      location: 'California, USA',
      message: 'I am pleased with the service I received - their professionalism and dedication exceeded my expectations. The career counseling sessions were commendable and really helped me.',
      rating: 5
    },
    {
      name: 'Anuj Garg',
      location: 'Indiana, USA',
      message: 'My experience with them was extremely positive. They have a very friendly environment where I got to learn a lot and feel supported throughout the entire process.',
      rating: 5
    },
    {
      name: 'Vibha Kokiloo',
      location: 'Dubai, UAE',
      message: 'Amazing team and great services! I would definitely recommend you to my friends who want to study abroad. They truly care about their students\' success.',
      rating: 5
    },
    {
      name: 'Rajat Chohda',
      location: 'Netherlands',
      message: 'Just loved the way they work. If you are looking for some genuine consultant, please visit them. They provide honest advice and real support.',
      rating: 5
    },
    {
      name: 'Waseem Akram',
      location: 'France',
      message: 'I would rank TGA #1 for European study visas. Thank you entire team, I would not forget the excellent experience with your company.',
      rating: 5
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Success Stories from Our Students</h2>
          <p className="section-subheading max-x-2xl mx-auto">
            Hear from students who have transformed their lives through our partnerships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <p className="text-4xl font-bold text-primary mb-2">3000+</p>
            <p className="text-muted-foreground">Happy Students</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-secondary mb-2">98%</p>
            <p className="text-muted-foreground">Visa Success</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Countries</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-secondary mb-2">50+</p>
            <p className="text-muted-foreground">Universities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
