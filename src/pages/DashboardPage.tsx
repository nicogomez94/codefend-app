import React, { useState, useEffect } from 'react';
import {
  DashboardLayout,
  StatCard,
  ResourceCard,
  AddResourcesSection,
  ScanProgressSection,
  RiskLevelChart,
  TeamSection,
  TopBar
} from '../components/dashboard';
import OnboardStep1 from '../components/onboard/OnboardStep1';
import OnboardStep2 from '../components/onboard/OnboardStep2';
import OnboardStep3 from '../components/onboard/OnboardStep3';

const DashboardPage: React.FC = () => {
  // Estado de onboarding
  const [onboardStep, setOnboardStep] = useState(1);
  const [domainToScan] = useState('www.mercadolibre.com');
  const [scanProgress, setScanProgress] = useState(0);
  
  // Estado para controlar si el análisis ha terminado
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  // Estados para datos del dashboard
  const [openIssues, setOpenIssues] = useState(0);
  const [fixedIssues, setFixedIssues] = useState(0);
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalFindings, setTotalFindings] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (onboardStep === 3) {
      setScanProgress(0);
      interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            if (interval) clearInterval(interval);
            
            // Actualizar los datos cuando el análisis termine
            updateDashboardData();
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [onboardStep]);
  
  // Función para actualizar los datos una vez completado el análisis
  const updateDashboardData = () => {
    // Simulación de datos del análisis
    setOpenIssues(12);
    setFixedIssues(5);
    setTotalIssues(17);
    setTotalFindings(26);
    setAnalysisComplete(true);
  };

  const handleGoToDashboard = () => {
    setOnboardStep(0);
    console.log("Ir directamente al dashboard");
    
    // Si el análisis estaba en curso y se saltó, actualizamos los datos
    if (scanProgress > 0 && scanProgress < 100) {
      updateDashboardData();
    }
  };

  const renderOnboardingStep = () => {
    switch (onboardStep) {
      case 1:
        return (
          <OnboardStep1
            onNext={() => setOnboardStep(2)}
          />
        );
      case 2:
        return (
          <OnboardStep2
            domain={domainToScan}
            onAnalyze={() => setOnboardStep(3)}
            onBack={() => setOnboardStep(1)}
          />
        );
      case 3:
        return (
          <OnboardStep3
            domain={domainToScan}
            progress={scanProgress}
            totalFindings={analysisComplete ? totalFindings : 0}
            analyzingFindings={analysisComplete ? `${totalFindings}/26` : "0/26"}
            phase="1/2 detección activa"
            estimatedTime="5:32"
            onGoToDashboard={handleGoToDashboard}
          />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      {renderOnboardingStep()}

      <div className="dashboard__two-column-layout">
        {/* Columna izquierda */}
        <div className="dashboard__column-left">
          <TopBar isAnalysisComplete={analysisComplete} />
          
          <div className='dashboard__container__resources'>
            <div className="dashboard__grid dashboard__grid--resources dashboard__resource-cards">
              <ResourceCard count={1} label="WEB APPS / SITES" />
              <ResourceCard count={0} label="MOBILE APPS" />
              <ResourceCard count={0} label="NETWORK ASSETS" />
              <ResourceCard count={0} label="CLOUD ASSETS" />
              <ResourceCard count={0} label="SOURCE CODE" />
              <ResourceCard count={0} label="SOCIAL ASSETS" />
            </div>

            <div className="dashboard__container">
              <AddResourcesSection />
            </div>
          </div>
          <TeamSection />
        </div>

        {/* Columna derecha - Datos dinámicos basados en el análisis */}
        <div className="dashboard__column-right">
          <div className="dashboard__issues">
            <StatCard 
              title="OPEN ISSUES" 
              value={analysisComplete ? openIssues.toString() : "0"} 
              color="red" 
            />
            <StatCard 
              title="FIXED ISSUES" 
              value={analysisComplete ? fixedIssues.toString() : "0"} 
              color="gray" 
            />
            <StatCard 
              title="TOTAL ISSUES" 
              value={analysisComplete ? totalIssues.toString() : "0"} 
              color="gray" 
            />
          </div>

          <div className="dashboard__chart-section">
            <RiskLevelChart/>
          </div>
          
          <div className="dashboard__scan-section">
            <ScanProgressSection 
              isAnalysisComplete={analysisComplete} 
              domain={domainToScan}
              totalFindings={totalFindings}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;