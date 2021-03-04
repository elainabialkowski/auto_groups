OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "組別 \"%1$s\" 用於自動分組應用程序，無法刪除。",
    "Auto Groups" : "自動分組",
    "Automatically adds all users to one or multiple specified groups." : "自動將所有用戶添加到一個或多個特定組別。",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "自動將用戶添加到指定的自動群組中，但屬於指定的替代群組之一的用戶除外。\n可選地，可以在每次成功登入時觸發群組分配，這對於外部用戶後端很有用。\n\n＃＃配置\n\n- 轉到“管理員設置>其他設置”\n- 配置自動群組\n- 如果需要，請配置替代群組（例如，針對服務賬戶）\n- 可選地，啟用登入掛鉤，這將在每次成功登入時強制執行正確的群組成員身份\n\n請注意，此app可防止刪除被稱為“自動群組”或“替代群組”的群組。\n\n##與類似應用程序的比較\n\n* [衆人群組]（https://apps.nextcloud.com/apps/group_everyone）：“衆人群組”app添加了一個虛擬群組後端，always return 所有用戶。相反，“自動群組”在常規群組後端中的“實際”群組上運行。此外，可以指定覆蓋群組，這將防止用戶被添加到自動群組。\n* [默認群組]（https://apps.nextcloud.com/apps/defaultgroup）：“自動群組”實際上是“默認群組”的現代化且經過維護的分支，自NC12左右以來似乎已被廢棄。就功能而言，它們幾乎是相同的。\n\n另外，我計劃隨著時間的推移添加更多功能，例如“聯合群組”-有關更多詳細信息，請參見[計劃里程碑]（https://github.com/stjosh/auto_groups/milestones）。",
    "Auto Groups:" : "自動分組：",
    "Automatically add all users to these groups." : "自動將所有用戶添加到這些組別。",
    "Override Groups:" : "覆蓋組別：",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "屬於以下至少一個群組的用戶將從自動群組中刪除。創建後將用戶添加到這些群組之一時，將應用相同的操作。也就是說，每次修改用戶的群組分配後，系統都會檢查其超控群組中的成員身份。 ",
    "Check for correct Auto Group membership on every login." : "每次登入時檢查正確的自動分組成員身份。",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "啟用此設置可在每次成功登入時強制執行正確的自動群組成員資格。如果未在Nextcloud中創建用戶（例如，使用外部用戶後端），或者在更改了自動群組/超控群組後對所有用戶強制執行正確的組成員身份，這將非常有用。",
    "Only check for Auto Group membership on user creation." : "僅在創建用戶時檢查自動組成員身份。",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "如果選中此選項，則在後續用戶修改時將不會強加自動組成員身份。"
},
"nplurals=1; plural=0;");
