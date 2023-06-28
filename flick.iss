#define MyAppName "Flick"
#define MyAppVersion "0.1"
#define MyAppPublisher "The Potato Baking Company"
#define MyAppURL "https://tumblbug.com/flick"
#define MyAppExeName "Flick.exe"
#define MyAppSolutionPath "C:\Users\Administrator\source\repos\flick-electron"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{C8C3E3FF-F51D-4E98-9540-26279FE66BA5}}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={code:GetProgramFiles}\{#MyAppPublisher}\{#MyAppName}
DisableProgramGroupPage=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=commandline
OutputBaseFilename=FocusTimer
SetupIconFile={#MyAppSolutionPath}\icon.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "Korean"; MessagesFile: "{#MyAppSolutionPath}\Korean.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce

[Files]
Source: "{#MyAppSolutionPath}\build\Flick-win32-x64\*"; DestDir: "{app}"; Flags: recursesubdirs ignoreversion
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

[Code]
function GetProgramFiles(Param: string): string;
begin
  if IsWin64 then Result := ExpandConstant('{commonpf64}')
    else Result := ExpandConstant('{commonpf32}')
end;