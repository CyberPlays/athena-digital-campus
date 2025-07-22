import { Calendar, Trophy, BookOpen, CheckCircle, Flame, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const streakDays = 7;
  const badges = [
    { name: "First Chapter", icon: BookOpen, color: "text-primary" },
    { name: "Week Warrior", icon: Flame, color: "text-orange-500" },
    { name: "Test Master", icon: Trophy, color: "text-yellow-500" },
    { name: "Doubt Solver", icon: CheckCircle, color: "text-green-500" },
  ];

  const completedChapters = [
    { subject: "Physics", chapter: "Mechanics", progress: 100 },
    { subject: "Chemistry", chapter: "Atomic Structure", progress: 100 },
    { subject: "Mathematics", chapter: "Algebra", progress: 85 },
    { subject: "Biology", chapter: "Cell Biology", progress: 92 },
  ];

  const activityData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 5),
  }));

  const getActivityColor = (count: number) => {
    if (count === 0) return "bg-muted";
    if (count <= 1) return "bg-primary/30";
    if (count <= 2) return "bg-primary/50";
    if (count <= 3) return "bg-primary/70";
    return "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background pl-64">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your learning progress.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Streak Counter */}
          <div className="glass-card rounded-xl p-6 interactive">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Study Streak</h3>
                <p className="text-2xl font-bold text-primary">{streakDays} days</p>
              </div>
            </div>
          </div>

          {/* Total Study Time */}
          <div className="glass-card rounded-xl p-6 interactive">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Total Hours</h3>
                <p className="text-2xl font-bold text-secondary">47.5h</p>
              </div>
            </div>
          </div>

          {/* Athena Coins */}
          <div className="glass-card rounded-xl p-6 interactive">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Athena Coins</h3>
                <p className="text-2xl font-bold text-yellow-500">1,250</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Badges Grid */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Earned Badges
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="glass-card rounded-lg p-4 text-center interactive">
                  <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.color}`} />
                  <p className="text-sm font-medium text-foreground">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Learning */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Continue Learning
            </h3>
            <div className="space-y-4">
              <div className="glass-card rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">Physics</h4>
                    <p className="text-sm text-muted-foreground">Thermodynamics - Chapter 3</p>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground">65% completed</p>
              </div>
              <button className="btn-neon w-full">Continue Chapter</button>
            </div>
          </div>
        </div>

        {/* Activity Heatmap */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Activity Heatmap
          </h3>
          
          {/* Month Labels */}
          <div className="flex mb-2 ml-8">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
              <div key={month} className="text-xs text-muted-foreground w-10 text-center" style={{ marginLeft: index * 4 * 12 / 12 + 'px' }}>
                {month}
              </div>
            ))}
          </div>
          
          <div className="flex">
            {/* Day Labels */}
            <div className="flex flex-col justify-around text-xs text-muted-foreground mr-2 h-24">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            
            {/* Heatmap Grid */}
            <div className="grid grid-rows-7 grid-flow-col gap-1">
              {activityData.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getActivityColor(day.count)} hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer`}
                  title={`${day.date.toLocaleDateString()}: ${day.count} ${day.count === 1 ? 'activity' : 'activities'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-muted/50"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/20"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/40"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/60"></div>
              <div className="w-3 h-3 rounded-sm bg-primary/80"></div>
              <div className="w-3 h-3 rounded-sm bg-primary"></div>
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Completed Chapters */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Completed Chapters
          </h3>
          <div className="space-y-3">
            {completedChapters.map((chapter, index) => (
              <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">{chapter.subject}</h4>
                  <p className="text-sm text-muted-foreground">{chapter.chapter}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${chapter.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">{chapter.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}