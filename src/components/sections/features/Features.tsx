'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Shield, Zap, Cloud, BarChart3, Code2, Rocket, Database, Brain } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description:
        'Advanced machine learning algorithms that adapt and optimize your workflows automatically for maximum efficiency.',
      badge: 'AI/ML',
    },
    {
      icon: Shield,
      title: 'Zero-Trust Security',
      description:
        'Military-grade encryption with multi-layer security protocols protecting your data at every touchpoint.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Sub-Millisecond Response',
      description:
        'Ultra-low latency architecture delivering 10x faster performance than traditional solutions.',
      badge: 'Performance',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Native',
      description:
        'Seamlessly deploy across AWS, Azure, and GCP with automatic failover and load balancing.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Live data visualization with predictive insights and automated anomaly detection capabilities.',
      badge: 'Analytics',
    },
    {
      icon: Code2,
      title: 'GraphQL API Suite',
      description:
        'Developer-first APIs with comprehensive SDKs, webhooks, and extensive documentation.',
      badge: 'Developer',
    },
    {
      icon: Rocket,
      title: 'Auto-Scaling Engine',
      description:
        'Intelligent resource allocation that scales from zero to millions of requests instantly.',
      badge: 'Scalability',
    },
    {
      icon: Database,
      title: 'Distributed Database',
      description: 'Global data replication with ACID compliance and 99.999% uptime guarantee.',
      badge: 'Database',
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description:
        'Process data at the edge with our global network of 200+ compute nodes worldwide.',
      badge: 'Edge',
    },
  ];

  const handleStartTrial = () => {
    console.log('Starting free trial for TestWebsite platform');
    // Navigate to trial signup
  };

  const handleViewDemo = () => {
    console.log('Opening TestWebsite live demo');
    // Open demo modal or page
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm">
            Enterprise-Grade Platform
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Built for the Future of
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            TestWebsite delivers cutting-edge technology solutions that power the next generation of
            startups and enterprises. Experience innovation at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-7 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium bg-muted/80">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
              </Card>
            );
          })}
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;50ms</div>
            <div className="text-sm text-muted-foreground">API Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10M+</div>
            <div className="text-sm text-muted-foreground">Requests/Day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Global Nodes</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of innovative companies already building the future with TestWebsite's
            enterprise-grade platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105"
            >
              Start 30-Day Trial
            </button>
            <button
              onClick={handleViewDemo}
              className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-accent hover:border-primary/30 transition-all duration-300"
            >
              Watch Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
