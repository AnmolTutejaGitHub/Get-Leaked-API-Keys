import Pattern from "./Pattern";
import ExplampleResult from './Assests/example leaked api.png';
import { VscGithubInverted } from "react-icons/vsc";
function App() {
    const apiKeyPatterns = [
        { pattern: "... AND (/sk-[a-zA-Z0-9]{48}/ AND (openai OR gpt))", description: 'OpenAI API Key' },
        { pattern: "/AKIA[0-9A-Z]{16}/", description: 'AWS Access Key' },
        { pattern: "/AIza[A-Za-z0-9_-]{35}/", description: 'Google Cloud API Key' },
        { pattern: "/ghp_[A-Za-z0-9]{36}/", description: 'GitHub Token' },
        { pattern: "/sk_(live|test)_[0-9a-zA-Z]{24}/", description: 'Stripe API Key' },
        { pattern: "/xoxb-[0-9]{12}-[0-9a-zA-Z]{24}/", description: 'Slack Token' },
        { pattern: "/AKIA[0-9A-Z]{16}/", description: 'AWS Access Key ID' },
        { pattern: "/(?:AWS|aws|Aws)?_?SECRET_?ACCESS_?KEY[=:][\"']?[A-Za-z0-9\\/\\+]{40}/", description: 'AWS Secret Access Key' },
        { pattern: "/ghp_[0-9a-zA-Z]{36}/", description: 'GitHub Personal Access Token' },
        { pattern: "/ya29\\.[0-9A-Za-z\\-_]+/", description: 'Google OAuth Access Token' },
        { pattern: "/xox[baprs]-([0-9a-zA-Z]{10,48})?/", description: 'Slack API Token' },
        { pattern: "/postgres:\/\/[^:\s]+:[^@\s]+@[^:\s]+:\d+\/[^:\s]+/", description: 'PostgreSQL Connection URI' },
        { pattern: "/AIza[0-9A-Za-z-_]{35}/", description: 'GCP API Key' },
        { pattern: "/(email|user(name)?|login)[^a-zA-Z0-9]*[=:][^a-zA-Z0-9]*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/", description: 'Email Password Patterns' },
        { pattern: "(path:*.xml OR path:*.json OR path:*.properties OR path:*.sql OR path:*.txt OR path:*.log OR path:*.tmp OR path:*.backup OR path:*.bak OR path:*.enc OR path:*.yml OR path:*.yaml OR path:*.toml OR path:*.ini OR path:*.config OR path:*.conf OR path:*.cfg OR path:*.env OR path:*.envrc OR path:*.prod OR path:*.secret OR path:*.private OR path:*.key) AND (access_key OR secret_key OR access_token OR api_key OR apikey OR api_secret OR apiSecret OR app_secret OR application_key OR app_key OR appkey OR auth_token OR authsecret) AND (SK AND (twilio OR auth_token))", description: 'Twilio API Key' },
        { pattern: "/amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/", description: "Amazon MWS Auth Token" },
        { pattern: "/AKIA[0-9A-Z]{16}/", description: "Amazon AWS Access Key ID" },
        { pattern: "/EAACEdEose0cBA[0-9A-Za-z]+/", description: "Facebook Access Token" },
        { pattern: "/[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/", description: "Google Cloud Platform OAuth" },
    ];


    const renderAPI = apiKeyPatterns.map((exp) => {
        return <Pattern pattern={exp.pattern} description={exp.description} />
    })
    return <div className="bg-gradient-to-r from-blue-500 to-green-500 w-full h-full">
        <div className="absolute right-3 top-4 text-[30px]"><a href="https://github.com/AnmolTutejaGitHub" target="_blank"><VscGithubInverted /></a></div>
        <div className="p-4 text-center font-bold text-[40px] text-white leading-relaxed tracking-wide">Search for Leaked API Keys</div>
        <div className="flex flex-row gap-4 flex-wrap p-4">{renderAPI}</div>
        <div className="flex justify-center">
            <img src={ExplampleResult} className="p-4 h-[700px]" alt="Example Result" />
        </div>
        <div className="p-2 mb text-center text-slate-700">Made with ❤️ by Anmol Tuteja</div>
        <div>
            <p className="text-center p-2">If you can contribute regular expressions to find API keys, please email me at <a
                href="mailto:tutejaanmol54@gmail.com?subject=Contributing%20to%20API%20Key%20Regex"
                className="text-blue-700 underline ml-1" target="_blank"
            >
                tutejaanmol54@gmail.com
            </a></p>
        </div>
    </div>
}
export default App;


// regular expressions : 
// https://gist.github.com/win3zz/0a1c70589fcbea64dba4588b93095855
// https://github.com/KleitonBarone/clone-tabnews/blob/e14b252faa815bb924d4d66513f6d3bd7726538d/.husky/check-secrets.js
// https://github.com/nickdeis/eslint-plugin-no-secrets/blob/25424ebb706d14186a32460caf520e48a2a79229/regexes.js
// https://github.com/elastic/anonymize-it/blob/303803a40be4ef3241d205cf072ec896bf20e253/anonymize_it/secret_regexes.json#L26