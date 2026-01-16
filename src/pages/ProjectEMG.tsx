import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import emgCircuitImage from "@/assets/projects/emg-circuit.jpg";

const ProjectEMG = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/#projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Biomedical Electronics
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            EMG Signal Acquisition System
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A complete electromyography (EMG) signal processing circuit that captures and processes muscle electrical activity for visualization and control applications.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={emgCircuitImage}
              alt="EMG Signal Processing Circuit with Arduino"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            System Architecture
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/emg-system-overview.png"
              alt="EMG System Block Diagram"
              className="w-full h-auto bg-white"
            />
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The system captures EMG signals from three electrodes, processes them through analog circuitry, 
            and outputs to an Arduino for digital processing and display via LED bar, buzzer, and servo motor.
          </p>
        </div>
      </section>

      {/* Signal Processing Chain */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Signal Processing Chain
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Instrumentation Amplifier
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Gain: ~1001 V/V</li>
                  <li>• High input impedance (LMC660CN)</li>
                  <li>• High CMRR for noise rejection</li>
                  <li>• DC blocking capacitors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  DRL Circuit
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Reduces common-mode interference</li>
                  <li>• Provides stable reference point</li>
                  <li>• Uses TL084CN op-amp</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Bandpass Filter
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Passband: 10Hz - 500Hz</li>
                  <li>• Removes DC offset and high-frequency noise</li>
                  <li>• Active filter design</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Precision Rectifier
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Full-wave rectification</li>
                  <li>• Super diode configuration</li>
                  <li>• TL084 for low-frequency processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Integrator
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 1.7Hz corner frequency</li>
                  <li>• Mean estimation of muscle activity</li>
                  <li>• Smooth output signal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Output Amplifier
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Gain: 68x</li>
                  <li>• Output range: 500mV to 2.9V</li>
                  <li>• ADC-compatible signal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circuit Diagrams */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Circuit Design
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-instrumentation-amp.png"
                alt="Instrumentation Amplifier Circuit"
                className="w-full h-auto bg-white"
              />
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Instrumentation amplifier with high CMRR and input impedance.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-rectifier-simulation.png"
                alt="Precision Rectifier Simulation"
                className="w-full h-auto bg-white"
              />
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Rectifier simulation showing signal envelope extraction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Output Features */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Output Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                LED Bar Display
              </h3>
              <p className="text-muted-foreground text-sm">
                10-element multi-color LED bar that increases illumination with muscle activity level.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Audio Feedback
              </h3>
              <p className="text-muted-foreground text-sm">
                Buzzer that produces higher tones as muscle activity increases for audio biofeedback.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Servo Control
              </h3>
              <p className="text-muted-foreground text-sm">
                Servo motor that displays muscle values from different angles for physical visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components & Cost */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Key Components
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>Microcontroller:</strong> Orangepip Kona 328 (Arduino-compatible)</li>
              <li>• <strong>Op-Amps:</strong> LMC660CN (CMOS input), TL084 (JFET input)</li>
              <li>• <strong>Power Supply:</strong> 9V PP3 battery with ±4.5V voltage divider</li>
              <li>• <strong>Electrodes:</strong> 3x EMG surface electrodes</li>
              <li>• <strong>Total Cost:</strong> £75.21</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/emg-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Report</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Complete circuit schematics, simulations, and power analysis included.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectEMG;
