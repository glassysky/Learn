//
//  ViewController.m
//  myGame
//
//  Created by 崔天昊 on 7/9/16.
//  Copyright © 2016 崔天昊. All rights reserved.
//

#import "ViewController.h"
#import "AboutViewController.h"

@interface ViewController (){
    int currentValue;
    int targetValue;
    int score;
    int round;
}
- (IBAction)showAlert:(id)sender;
@property (strong, readwrite, nonatomic) IBOutlet UISlider *slider;
@property (strong, readwrite, nonatomic) IBOutlet UILabel *targetLabel;
@property (strong, readwrite, nonatomic) IBOutlet UILabel *scoreLabel;
@property (strong, readwrite, nonatomic) IBOutlet UILabel *roundLabel;
- (IBAction)sliderMoved:(UISlider*)sender;
- (IBAction)startOver:(id)sender;
- (IBAction)showInfo:(id)sender;

@end

@implementation ViewController

@synthesize slider;
@synthesize targetLabel;
@synthesize scoreLabel;

- (void)updateLabels {
    self.targetLabel.text = [NSString stringWithFormat:@"%d", targetValue];
    self.scoreLabel.text = [NSString stringWithFormat:@"%d", score];
    self.roundLabel.text = [NSString stringWithFormat:@"%d", round];
}

- (void)startNewGame {
    score = 0;
    round = 0;
    [self startNewRound];
}

//开始新回合
- (void)startNewRound {
    targetValue = 1 + (arc4random() % 100);
    currentValue = 50;
    round += 1;
    self.slider.value = currentValue;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self startNewRound];
    [self updateLabels];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)showAlert:(id)sender {
    
    int difference = abs(targetValue - currentValue);
    int point = 100 - difference;
    
    NSString *title;
    
    if (difference == 0) {
        title = @"厉害啊！";
    } else if (difference < 5) {
        title = @"还可以。";
    } else if (difference < 10) {
        title = @"一般吧...";
    } else {
        title = @"你是瞎子吗？！";
    }
    
    score += point;

    NSString *message = [NSString stringWithFormat:@"您的得分是:%d", point];
    
    //初始化提示框；
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
    
    [alert addAction:[UIAlertAction actionWithTitle:@"朕知道了" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        //点击按钮的响应事件；
        [self startNewRound];
        [self updateLabels];
    }]];
    
    //弹出提示框；
    [self presentViewController:alert animated:true completion:nil];
    
}

- (IBAction)sliderMoved:(UISlider*)sender {
    
    currentValue = (int)lroundf(sender.value);
}

- (IBAction)startOver:(id)sender {
    [self startNewGame];
    [self updateLabels];
}

- (IBAction)showInfo:(id)sender {
    AboutViewController *controller = [[AboutViewController alloc]initWithNibName:@"AboutViewController" bundle:nil];
    controller.modalTransitionStyle = UIModalTransitionStyleFlipHorizontal;
    [self presentViewController:controller animated:YES completion:nil];
    
}
@end
