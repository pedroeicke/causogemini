
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-petrol text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Dr. Casuo</h3>
                        <p className="text-white/70">Medicina Estética e Integrativa.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Endereço</h4>
                        <p className="text-white/70">Rua Fictícia, 123 - Sala 45</p>
                        <p className="text-white/70">Cidade, Estado - CEP 00000-000</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contato</h4>
                        <p className="text-white/70">Telefone: (11) 99999-8888</p>
                        <p className="text-white/70">Email: contato@drcasuo.com.br</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
                        <div className="flex space-x-4">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.75 4.18,10.53C3.47,10.51 2.82,10.31 2.26,10V10.04C2.26,12.19 3.75,13.98 5.8,14.41C5.45,14.5 5.08,14.54 4.7,14.54C4.42,14.54 4.15,14.51 3.89,14.46C4.45,16.22 6.04,17.47 7.95,17.51C6.47,18.68 4.6,19.33 2.6,19.33C2.25,19.33 1.9,19.31 1.56,19.28C3.48,20.57 5.8,21.3 8.32,21.3C16,21.3 20.33,14.46 20.33,8.81C20.33,8.62 20.33,8.43 20.32,8.24C21.16,7.63 21.88,6.87 22.46,6Z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07,3.252,0.148,4.771,1.691,4.919,4.919,0.058,1.265,0.07,1.646,0.07,4.85s-0.012,3.584-0.07,4.85c-0.148,3.227-1.669,4.771-4.919,4.919-1.266,0.058-1.646,0.07-4.85,0.07s-3.584-0.012-4.85-0.07c-3.252-0.148-4.771-1.691-4.919-4.919-0.058-1.265-0.07-1.646-0.07-4.85s0.012-3.584,0.07-4.85c0.148-3.227,1.669-4.771,4.919-4.919,1.266-0.058,1.646-0.07,4.85-0.07M12,0C8.74,0,8.333,0.014,7.053,0.072,2.695,0.272,0.273,2.69,0.073,7.052,0.014,8.333,0,8.74,0,12s0.014,3.667,0.072,4.947c0.2,4.358,2.618,6.78,6.98,6.98,1.281,0.058,1.687,0.072,4.947,0.072s3.667-0.014,4.947-0.072c4.354-0.2,6.782-2.618,6.979-6.98,0.058-1.28,0.072-1.687,0.072-4.947s-0.014-3.667-0.072-4.947c-0.196-4.354-2.617-6.78-6.979-6.98-1.28-0.058-1.687-0.072-4.947-0.072h0Z M12,5.838a6.162,6.162,0,1,0,6.162,6.162A6.162,6.162,0,0,0,12,5.838Z M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z M17.636,5.838a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,17.636,5.838Z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
                    <p>&copy; {new Date().getFullYear()} Clínica Dr. Casuo. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
