'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Code, Database, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/temp');
  };
  const handleProfessionalPlan = () => {
    router.push('/temp');
  };
  const handleEnterprisePlan = () => {
    router.push('/temp');
  };
  const handleScheduleDemo = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for indie developers and small tech teams',
      price: 'Free',
      period: '',
      badge: null,
      icon: Code,
      features: [
        'Up to 5 API endpoints',
        'Real-time monitoring',
        'Community support',
        '10GB cloud storage',
        'Basic deployment tools',
        'Standard SSL certificates',
      ],
      cta: 'Deploy Now',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Scale',
      description: 'Built for growing startups and production workloads',
      price: '$49',
      period: '/month',
      badge: 'Most Popular',
      icon: Database,
      features: [
        'Unlimited API endpoints',
        'Advanced monitoring & alerts',
        'Priority technical support',
        '500GB cloud storage',
        'CI/CD pipeline automation',
        'Custom domain management',
        'Multi-region deployment',
        'Performance analytics',
        'Load balancing',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale applications requiring maximum performance',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      icon: Shield,
      features: [
        'Everything in Scale plan',
        'Unlimited cloud storage',
        '24/7 dedicated support',
        'Custom integrations',
        'Enterprise-grade security',
        '99.99% SLA guarantee',
        'Dedicated infrastructure',
        'Custom training sessions',
        'Compliance certifications',
      ],
      cta: 'Contact Engineering',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Zap className="size-3 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Innovation
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Without Limits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            From prototype to production, TestWebsite grows with your tech stack. No vendor lock-in,
            no hidden costs, no compromises on performance.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 30%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                    : 'border-border/50 hover:border-primary/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                )}

                <CardHeader className="relative text-center pb-8">
                  <div className="size-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="size-6 text-primary" />
                  </div>

                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit">
                      {plan.badge}
                    </Badge>
                  )}

                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={plan.action}
                    className={cn(
                      'w-full text-base py-6',
                      plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === 'Scale' && (
                    <p className="text-center text-sm text-muted-foreground">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Building something revolutionary?</h3>
          <p className="text-muted-foreground mb-6">
            Our engineering team works directly with innovative startups to architect custom
            solutions that scale from MVP to millions of users.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            <Shield className="size-4 mr-2" />
            Schedule Architecture Review
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">Infrastructure Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">10ms</div>
              <div className="text-sm text-muted-foreground">Average API Response</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">SOC 2</div>
              <div className="text-sm text-muted-foreground">Type II Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
